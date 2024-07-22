const express = require("express");
const router = express.Router();
const messages = require("./index").messages;
router.get("/", (req, res) => {
  res.render("form", { title: "New form" });
});
router.post("/new", (req, res) => {
  const { messageText, user } = req.body;
  messages.push({ text: messageText, user: user, added: new Date() });
  res.redirect("/");
});
module.exports = router;
