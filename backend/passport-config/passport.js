const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("../models/UserSchema");

const initializePassport = (passport) => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const user = await User.findOne({ email });
          if (!user)
            return done(null, false, { message: "User in not found " });

          if (!(await bcrypt.compare(password, user.password || " ")))
            return done(null, false, { message: "Password not matched" });
          done(null, user);
        } catch (error) {
          return done(error, false, { message: error.message });
        }
      }
    )
  );
  passport.serializeUser((user, done) => {
    try {
      done(null, user.id);
    } catch (error) {
      console.error(error);
      return done(error, false, {
        message: "Internal error during serialization",
      });
    }
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      if (!user) {
        return done(null, false, { message: "User not found" });
      }
      return done(null, user);
    } catch (error) {
      console.error(error);
      return done(error, false, {
        message: "Internal error during deserialization",
      });
    }
  });
};

module.exports = initializePassport;
