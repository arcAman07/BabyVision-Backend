const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

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

exports.userModel = User;
