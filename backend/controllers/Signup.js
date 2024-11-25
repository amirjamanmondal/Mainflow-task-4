const User = require("../models/UserSchema");
const userValidator = require("../validator/userValidator");
const bcrypt = require("bcrypt");

const Signup = async (req, res) => {
  try {
    const { name, email, age, gender, password } = userValidator.parse(
      req.body
    );

    const user = await User.findOne({ email });

    if (user) return res.status(409).json({ message: "User is already exist" });

    const hashed = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      age,
      gender,
      password: hashed,
    });

    await newUser.save();
    if (newUser) res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = Signup;
