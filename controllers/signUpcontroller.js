require("dotenv").config();
var bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const userSchema = require("../models/user");
const User = mongoose.model("User", userSchema);
const saltRounds = 10;

exports.postUser = (req, res, next) => {
  bcrypt.hash(req.body.password, saltRounds, (error, hash) => {
    if (!error) {
      const newUser = new User({
        name: req.body.name,
        username: req.body.username,
        password: hash,
        email: req.body.email,
      });
      newUser.save((err) => {
        if (err) {
          console.log(err);
          res.send(err);
        } else {
          console.log("Successfully added the new user");
          res.send("Successfully added the new user");
        }
      });
    } else {
      console.log(error);
      res.send(error);
    }
  });
};

exports.getAllUsers = (req, res, next) => {
  User.find((err, results) => {
    if (!err) {
      res.send(results);
    } else {
      console.log(err);
      res.send(err);
    }
  });
};

exports.authenticateUser = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }, (err, foundUser) => {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        if (foundUser.password === password) {
          console.log("User authenticated");
          res.send("User authenticated");
        } else {
          console.log("Incorrect password");
          res.send("Incorrect password");
        }
      } else {
        console.log("User not Found!");
        res.send("User Not found!");
      }
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
