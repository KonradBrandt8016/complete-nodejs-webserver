const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", {
    title: "Home",
    message: "Welcome to the Overstrand, The Jewel Of The Western Cape©!",
    author: "Konrad"
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "Hermanus 2018",
    author: "Konrad"
  });
});

router.get("/bad", (req, res) => {
  res.status(404);
  res.send({ error: "this resource was not found" });
});

router.get("/projects", (req, res) => {
  res.render("projects", { title: "Portfolio", author: "Konrad" });
});

module.exports = router;
