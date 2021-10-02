const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

exports.postCorrections = (req,res, next)=>{

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


}