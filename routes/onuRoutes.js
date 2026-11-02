const express = require("express");
const router = express.Router();

//get all onus endpoint:
router.get("/", (req, res) => {
  res.send("Get onus endpoint works");
}   );

//get a single onu endpoint:
router.get("/:id", (req, res) => {
  res.send("Get one onu endpoint works");
});


router.post("/", (req, res) => {
  res.send("Create onu endpoint works");
});

router.patch("/:id", (req, res) => {
  res.send("Update onu endpoint works");
});



module.exports = router;
