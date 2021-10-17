const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const labelSchema = require("../models/label");

const mongooseFieldEncryption =
  require("mongoose-field-encryption").fieldEncryption;
var md5 = require("md5");
var bcrypt = require("bcryptjs");
console.log(md5("message"));
var session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const postsController = require("../controllers/postsController");
const mongoose = require("mongoose");
// const {Schema} = mongoose;

// const Label = mongoose.model("Label", labelSchema);

// Post Request to store label Details(predictions by the ML model)

router.post("/posts", postsController.postLabels);

router.get("/posts/:id", postsController.getLabels);

router.delete("/posts/:id", postsController.deleteLabels);

module.exports = router;
