const express = require("express");
const router = express.Router();

//Home page
router.get("/", (req, res) => {
    res.render("home");
})

//About Page
router.get("/about", (req, res) => {
    res.render("about");
})

//Contact Page
router.get("/contact", (req, res) => {
    res.render("contact");
})

//Services Page
router.get("/services", (req, res) => {
    res.render("services");
})



//Products Page
router.get("/products", (req, res) => {
    res.render("products");
})
    

module.exports = router;
 