const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("기본 url");
});

router.get("/about", (req, res) => {
  res.send("goods.js");
});

module.exports = router;
