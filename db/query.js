const pool = require("./pool");
console.log(pool);
async function createUser(author, message, date) {
  await pool.query(
    "INSERT INTO messages (author, message, date) VALUES ($1, $2, $3)",
    [author, message, date]
  );
}
async function getUsers() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}
module.exports = {
  getUsers,
  createUser,
};
