const express = require("express");
const router = express.Router();

//get all users endpoint:
router.get("/", (req, res) => {
  res.send("Get users endpoint works");
});

//get a single user endpoint:
router.get("/:id", (req, res) => {
  res.send("Get one user endpoint works");
});

//create a new user endpoint:
router.post("/", (req, res) => {
  res.send("Create user endpoint works");
});

//update a user endpoint:
router.patch("/:id", (req, res) => {
  res.send("Update user endpoint works");
});

//delete a user endpoint:
router.delete("/:id", (req, res) => {
  res.send("Delete user endpoint works");
});



module.exports = router;