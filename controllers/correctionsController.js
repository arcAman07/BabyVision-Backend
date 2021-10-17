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

exports.getCorrections = (req, res, next) => {
  Correction.findOne({ _id: req.params.id }, (err, correction) => {
    if (!err) {
      res.send(correction);
    } else {
      console.log(err);
      console.log(correction);
    }
  });
};

exports.patchCorrections = (req, res, next) => {
  Correction.updateOne({ _id: req.params.id }, { $set: req.body }, (err) => {
    if (!err) {
      console.log("Correction details updated successfully");
      res.send("Successfully updated the correction details");
    } else {
      console.log(err);
      res.send(err);
    }
  });
};

exports.deleteCorrections = (req, res, next) => {
  Correction.deleteOne({ _id: req.params.id }, (err) => {
    if (!err) {
      console.log("Correction details deleted successfully");
      res.send("Successfully deleted the correction details");
    } else {
      console.log(err);
      res.send(err);
    }
  });
};

exports.correctionModel = Correction;
