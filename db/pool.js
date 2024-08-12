const { Pool } = require("pg");

module.exports = new Pool({
  DATABASE_URL: process.env.DATABASE_URL,
});
