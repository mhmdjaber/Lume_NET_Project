const express = require("express");
const router = express.Router();

//get all packages endpoint:
router.get("/", (req, res) => {
  res.send("Get packages endpoint works");
});

//get a single package endpoint:
router.get("/:id", (req, res) => {
  res.send("Get one package endpoint works");
});

//create a new package endpoint:
router.post("/", (req, res) => {
  res.send("Create package endpoint works");
});//only for admin users to create a new package in the database permanently.

//update a package endpoint:
router.patch("/:id", (req, res) => {
  res.send("Update package endpoint works");
});//only for admin users to update a package in the database permanently.

//delete a package endpoint:
router.delete("/:id", (req, res) => {
  res.send("Delete package endpoint works");
});//only for admin users to delete a package from the database permanently.







module.exports = router;