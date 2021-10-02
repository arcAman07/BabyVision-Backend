const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

exports.postLabels = (req,res, next)=>{

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


}