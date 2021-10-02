require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const mongooseFieldEncryption = require("mongoose-field-encryption").fieldEncryption;
var md5 = require('md5');
var bcrypt = require('bcryptjs');        
console.log(md5('message'));
var session = require('express-session')
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json())
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/bookDB", {useNewUrlParser:true,  useUnifiedTopology: true});