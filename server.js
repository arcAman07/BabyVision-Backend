require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json())
app.use(express.static("public"));

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

// app.use(errorController.error);

app.listen(3000, () => console.log("The server is running on port 3000"));
