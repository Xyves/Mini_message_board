const db = require("../db/query");
async function getUsers(req, res) {
  const messages = await db.getUsers();
  // res.send("Usernames: " + usernames.map((message) => message.author));
  res.send({ messages });
  // res.render("index", { title: "Mini Messageboard", messages: listMessages });
}
async function createUsernameGet(req, res) {
  res.render("form", { title: "create username" });
}
async function createUsernamePost(req, res) {
  const { author, message, date } = req.body;
  console.log(username);
  await db.insertUser(author, message, date);
  res.redirect("/");
}
module.exports = {
  createUsernamePost,
  createUsernameGet,
  getUsers,
};
