const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;

    const hashedPassword = bcrypt.hashSync(password, 8);

    const user = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });

    const savedUser = await user.save();

    let userRoles = [];
    if (roles && roles.length > 0) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      userRoles = foundRoles.map((role) => role._id);
    } else {
      const defaultRole = await Role.findOne({ name: "adult" });
      userRoles.push(defaultRole._id);
    }

    savedUser.roles = userRoles;
    await savedUser.save();

    res.status(200).send({ message: "User was registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message || "An error occurred while registering the user." });
  }
};

exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username }).populate("roles", "-__v");

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({ accessToken: null, message: "Invalid Password!" });
    }

    const token = jwt.sign({ id: user.id }, config.secret, {
      algorithm: "HS256",
      expiresIn: "60h", // 60 hours
    });

    const authorities = user.roles.map((role) => "ROLE_" + role.name.toUpperCase());

    res.status(200).send({
      id: user._id,
      username: user.username,
      email: user.email,
      roles: authorities,
      accessToken: token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message || "An error occurred while signing in." });
  }
};
