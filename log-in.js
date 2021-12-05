const path = require('path')
const express = require("express");

const router = express.Router();
const rootDir = require('../util/path.js');
router.get("/log-in", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'log-in.html'));;
});
router.get("/userlog-in", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'userlogin.html'));;
});


module.exports = router;
