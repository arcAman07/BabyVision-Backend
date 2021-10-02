const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const labelSchema = require('../models/label')

const mongooseFieldEncryption = require("mongoose-field-encryption").fieldEncryption;
var md5 = require('md5');
var bcrypt = require('bcryptjs');        
console.log(md5('message'));
var session = require('express-session')
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');


const Label = mongoose.model("Label", labelSchema);

// Post Request to store label Details(predictions by the ML model)


router.post('/posts',(req,res, next)=>{

    const newLabel = new Label({
        name: req.body.name,
        username: req.body.username,
        picture: req.body.picture,
        label: req.body.label,
    })

    newLabel.save((err)=>{
        if(err){
            console.log(err);
        }
        else {
            console.log("Successfully added the new label");
        }
    });


})

module.exports = router;