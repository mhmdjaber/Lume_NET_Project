const express = require("express");
const router = express.Router();

//get all subscribers endpoint:
router.get("/", (req, res) => {
  res.send("Get subscribers endpoint works");
});

//get a single subscriber endpoint:
router.get("/:id", (req, res) => {
  res.send("Get one subscriber endpoint works");
});

//create a new subscriber endpoint:
router.post("/", (req, res) => {
  res.send("Create subscriber endpoint works");
});

//update a subscriber endpoint:
router.patch("/:id", (req, res) => {
  res.send("Update subscriber endpoint works");
});

//delete a subscriber endpoint:
router.delete("/:id", (req, res) => {
  res.send("Delete subscriber endpoint works");
}); // note: i will delete the row immediately it will be stored in the database for 3 months by that we can restore it if we want to restore it in the future

module.exports = router;