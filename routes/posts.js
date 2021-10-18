const express = require("express");

const router = express.Router();

const postsController = require("../controllers/postsController");

// Post Request to store label Details(predictions by the ML model)

router.get("/posts", postsController.getAllLabels);

router.post("/posts", postsController.postLabels);

router.get("/posts/:id", postsController.getLabels);

router.delete("/posts/:id", postsController.deleteLabels);

module.exports = router;
