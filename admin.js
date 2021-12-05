const path = require('path')
const express = require("express");

const router = express.Router();
const rootDir = require('../util/path.js');

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));;
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/log-in");
});

module.exports = router;
