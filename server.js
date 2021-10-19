require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json())

const correctionRoutes = require("./routes/corrections");
const postsRoutes = require("./routes/posts");
const signUpRoutes = require("./routes/signUp");

mongoose.connect("mongodb://localhost:27017/visionDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(correctionRoutes);
app.use(postsRoutes);
app.use(signUpRoutes);

app.listen(PORT, () => console.log("The server is running"));
