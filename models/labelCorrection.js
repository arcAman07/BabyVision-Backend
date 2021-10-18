const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const mongoose = require("mongoose");
const { Schema } = mongoose;
const correctionSchema = new Schema({
  name: { type: "string", required: true },
  username: { type: "string", required: true },
  picture: { type: "string" },
  expectedLabel: { type: "string" },
  label: { type: "string" },
  accuracy: { type: "boolean" },
  feedback: { type: "string" },
});

module.exports = correctionSchema;
