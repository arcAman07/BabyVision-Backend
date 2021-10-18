const express = require("express");

const router = express.Router();

const correctionsController = require("../controllers/correctionsController");

// Post Request to store the accuracy of the label Details(predicted by the ML model)

router.get("/corrections", correctionsController.getAllCorrections);

router.post("/corrections", correctionsController.postCorrections);

router.get("/corrections:id", correctionsController.getCorrections);

router.patch("/corrections:id", correctionsController.patchCorrections);

router.delete("/corrections:id", correctionsController.deleteCorrections);

module.exports = router;
