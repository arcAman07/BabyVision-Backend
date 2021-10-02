const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const mongooseFieldEncryption = require("mongoose-field-encryption").fieldEncryption;
var md5 = require('md5');
var bcrypt = require('bcryptjs');        
console.log(md5('message'));
var session = require('express-session')
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

// Post Request to Accuracy of the labels predicted to make the ML model better(getting more data)