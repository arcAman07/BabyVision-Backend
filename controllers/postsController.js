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

exports.labelModel = Label;
