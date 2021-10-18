const mongoose = require("mongoose");

const labelSchema = require("../models/label");

const Label = mongoose.model("Label", labelSchema);

exports.postLabels = (req, res, next) => {
  const newLabel = new Label({
    name: req.body.name,
    username: req.body.username,
    picture: req.body.picture,
    label: req.body.label,
  });

  newLabel.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully added the new label");
      res.send("Successfully added the new label");
    }
  });
};

exports.getLabels = (req, res, next) => {
  Label.findOne({ _id: req.params.id }, (err, label) => {
    if (!err) {
      res.send(label);
    } else {
      console.log(err);
      console.log(label);
    }
  });
};

exports.getAllLabels = (req, res, next) => {
  Label.find((err, results) => {
    if (!err) {
      res.send(results);
    } else {
      console.log(err);
      res.send(err);
    }
  });
};

exports.deleteLabels = (req, res, next) => {
  Label.deleteOne({ _id: req.params.id }, (err) => {
    if (!err) {
      console.log("Label details deleted successfully");
      res.send("Successfully deleted the label details");
    } else {
      console.log(err);
      res.send(err);
    }
  });
};
