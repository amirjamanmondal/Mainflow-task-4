const express = require("express");
const Signup = require("../controllers/Signup");
const passport = require("passport");
const isAuthenticated = require("../middleware/AuthUser");
const GetInfo = require("../controllers/GetInfo");
const Logout = require("../controllers/Logout");

const router = express.Router();

router.post("/signup", Signup);

router.post(
  "/login",
  passport.authenticate("local", {
    successMessage: "Login successful",
    failureMessage: "Something went wrong",
  }),
  (req, res) => {
    const user = req.user;
    res.status(200).json({ message: "Login successfull", user });
  }
);

router.get("/", isAuthenticated, GetInfo);
router.get("/logout", Logout);

module.exports = router;
