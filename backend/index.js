const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const session = require("express-session");
const dataBaseConnection = require("./databaseConnection/DB.connect");
const router = require("./router/userRouter");
const passport = require("passport");
const initializePassport = require("./passport-config/passport");

const app = express();

const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

require("dotenv").config();
app.use(cors(corsOption));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SECRET_KEY || "A_SERET_KEY",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 7 * 60 * 60 * 1000 },
  })
);

app.use(passport.initialize());
app.use(
  passport.session({
    secret: process.env.SESSION_SECRET || "your_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 5 * 24 * 60 * 1000 },
  })
);

initializePassport(passport);

// app.use();
app.use("/user", router);

dataBaseConnection();

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`server running on port ${port}`));
