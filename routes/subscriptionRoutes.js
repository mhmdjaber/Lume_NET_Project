const express = require("express");
const router = express.Router();

//get all subscriptions endpoint:
router.get("/", (req, res) => {
  res.send("Get subscriptions endpoint works");
});

//get a single subscription endpoint:
router.get("/:id", (req, res) => {
  res.send("Get one subscription endpoint works");
});

//create a new subscription endpoint:   
router.post("/", (req, res) => {
  res.send("Create subscription endpoint works");
});

//update a subscription endpoint:
router.patch("/:id", (req, res) => {
  res.send("Update subscription endpoint works");
});
  
module.exports = router;