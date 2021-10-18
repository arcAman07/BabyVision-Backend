require("dotenv").config();
var md5 = require("md5");
const mongoose = require("mongoose");
const userSchema = require("../models/user");
const User = mongoose.model("User", userSchema);

exports.postUser = (req, res, next) => {
  const newUser = new User({
    name: req.body.name,
    username: req.body.username,
    password: md5(req.body.password),
    email: req.body.email,
  });

  newUser.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully added the new user");
      res.send("Successfully added the new user");
    }
  });
};

exports.getUser = (req, res, next) => {
  User.findOne({ _id: req.params.id }, (err, user) => {
    if (!err) {
      res.send(user);
    } else {
      console.log(err);
      console.log(user);
    }
  });
};

exports.patchUser = (req, res, next) => {
  User.updateOne({ _id: req.params.id }, { $set: req.body }, (err) => {
    if (!err) {
      console.log("User details updated successfully");
      res.send("Successfully updated the user details");
    } else {
      console.log(err);
      res.send(err);
    }
  });
};

exports.deleteUser = (req, res, next) => {
  User.deleteOne({ _id: req.params.id }, (err) => {
    if (!err) {
      console.log("User details deleted successfully");
      res.send("Successfully deleted the user details");
    } else {
      console.log(err);
      res.send(err);
    }
  });
};

exports.userModel = User;
