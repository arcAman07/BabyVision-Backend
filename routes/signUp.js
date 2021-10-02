const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const userSchema = require('../models/user');

// userSchema.plugin(mongooseFieldEncryption,{
//     fields:["password"],
//     secret:process.env.SECRET,
//     saltGenerator: (secret) => secret.slice(0, 16)

// })

const User = mongoose.model("User", userSchema);

const mongooseFieldEncryption = require("mongoose-field-encryption").fieldEncryption;
var md5 = require('md5');
var bcrypt = require('bcryptjs');        
console.log(md5('message'));
var session = require('express-session')
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

const signUpcontroller = require('../controllers/signUpcontroller')

// Post Request to store user Details

router.post('/signUp',signUpcontroller.postUser)

module.exports = router;