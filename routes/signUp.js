const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

// const userSchema = require('../models/user');

const mongoose = require("mongoose");
// const {Schema} = mongoose;

// userSchema.plugin(mongooseFieldEncryption,{
//     fields:["password"],
//     secret:process.env.SECRET,
//     saltGenerator: (secret) => secret.slice(0, 16)

// })

// const User = mongoose.model("User", userSchema);
const signUpcontroller = require("../controllers/signUpcontroller");

// Post Request to store user Details

router.post("/signUp", signUpcontroller.postUser);

router.get("/signUp/:id", signUpcontroller.getUser);

router.patch("/signUp/:id", signUpcontroller.patchUser);

router.delete("/signUp/:id", signUpcontroller.deleteUser);

router.get("signUp/authenticate", signUpcontroller.authenticateUser);

module.exports = router;
