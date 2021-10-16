const mongoose = require("mongoose");

const correctionSchema = require("../models/labelCorrection");

const Correction = mongoose.model("Correction", correctionSchema);

exports.postCorrections = (req, res, next) => {
  const newCorrection = new Correction({
    name: req.body.name,
    username: req.body.username,
    picture: req.body.picture,
    label: req.body.label,
    expectedLabel: req.body.expectedLabel,
    accuracy: req.body.accuracy,
    feedback: req.body.feedback,
  });

  newCorrection.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully added the new correction");
      res.send("Successfully added the new correction");
    }
  });
};

exports.correctionModel = Correction;
