const express = require('express');
const router =express.Router();




//login endpoint: 
router.post("/login", (req, res) => {
    res.send("Login endpoint works");
});

//logout endpoint:
router.post("/logout", (req, res) => {
    res.send("Logout endpoint works");
});
//check the user-logged in info if  is its admin or employee
 router.get("/me" , (req,res) => {
    res.send("Me endpoint works");
});










module.exports = router;