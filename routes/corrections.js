const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const correctionSchema = require('../models/labelCorrection');

const mongooseFieldEncryption = require("mongoose-field-encryption").fieldEncryption;
var md5 = require('md5');
var bcrypt = require('bcryptjs');        
console.log(md5('message'));
var session = require('express-session')
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');


const Correction = mongoose.model("Correction", correctionSchema);

// Post Request to store the accuracy of the label Details(predicted by the ML model)


router.post('/posts',(req,res, next)=>{

    const newCorrection = new Correction({
        name: req.body.name,
        username: req.body.username,
        picture: req.body.picture,
        label: req.body.label,
        expectedLabel: req.body.expectedLabel,
        accuracy: req.body.accuracy,
        feedback: req.body.feedback,
    })

    newCorrection.save((err)=>{
        if(err){
            console.log(err);
        }
        else {
            console.log("Successfully added the new correcion");
        }
    });


})

module.exports = router;