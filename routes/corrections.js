const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// const correctionSchema = require('../models/labelCorrection');

const mongooseFieldEncryption = require("mongoose-field-encryption").fieldEncryption;
var md5 = require('md5');
var bcrypt = require('bcryptjs');        
console.log(md5('message'));
var session = require('express-session')
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const mongoose = require("mongoose");
// const {Schema} = mongoose;

// const Correction = mongoose.model("Correction", correctionSchema);

const correctionsController = require('../controllers/correctionsController');

// Post Request to store the accuracy of the label Details(predicted by the ML model)


router.post('/posts',correctionsController.postCorrections);

module.exports = router;