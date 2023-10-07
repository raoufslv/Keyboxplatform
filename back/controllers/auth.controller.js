const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    console.log(req.body);
    const {
      fullname,
      parentfullname,
      phone,
      address,
      dateofbirth,
      fieldofstudy,
      email,
      password,
      role,
    } = req.body;

    const hashedPassword = bcrypt.hashSync(password, 8);

    const user = new User({
      fullname,
      parentfullname,
      phone,
      address,
      dateofbirth,
      fieldofstudy,
      email,
      password: hashedPassword,
    });

    const savedUser = await user.save();

    let userRoles = [];
    if (role && role.length > 0) {
      const foundRoles = await Role.find({ name: { $in: role } });
      userRoles = foundRoles.map((role) => role._id);
    } else {
      const defaultRole = await Role.findOne({ name: "adult" });
      userRoles.push(defaultRole._id);
    }

    savedUser.roles = userRoles;
    await savedUser.save();

    const token = jwt.sign({ id: savedUser.id }, config.secret, {
      algorithm: "HS256",
      expiresIn: "60h", // 60 hours
    });

    const authorities = "ROLE_" + role.toUpperCase();

    res.status(200).send({
      message: "User was registered successfully!",
      id: user._id,
      fullname: user.fullname,
      email: user.email,
      roles: authorities,
      accessToken: token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: error.message || "An error occurred while registering the user.",
    });
  }
};

exports.signin = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findOne({ email: req.body.email }).populate(
      "roles",
      "-__v"
    );

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res
        .status(401)
        .send({ accessToken: null, message: "Invalid Password!" });
    }

    const token = jwt.sign({ id: user.id }, config.secret, {
      algorithm: "HS256",
      expiresIn: "60h", // 60 hours
    });

    const authorities = user.roles.map(
      (role) => "ROLE_" + role.name.toUpperCase()
    );

    res.status(200).send({
      id: user._id,
      fullname: user.fullname,
      email: user.email,
      roles: authorities,
      accessToken: token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: error.message || "An error occurred while signing in.",
    });
  }
};
