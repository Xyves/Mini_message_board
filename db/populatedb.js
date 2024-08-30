// const { Client } = require("pg");

// const SQL = `
// CREATE TABLE IF NOT EXISTS messages (
//   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//   author VARCHAR ( 255 ),
//   message VARCHAR (255)
// );
// INSERT INTO messages (author,message)
// VALUES
//   ('Bryan','He had a hidden stash underneath the floorboards in the back room of the house.
// '),
//   ('Odin','The furnace repairman indicated the heating system was acting as an air conditioner.
// '),
//   ('Damon','Today I dressed my unicorn in preparation for the race.
// ');
// `;

// async function main() {
//   console.log("seeding...");
//   const client = new Client({
//     connectionString: process.env.DATABASE_URL,
//   });
//   await client.connect();
//   await client.query(SQL);
//   await client.end();
//   console.log("done");
// }
// main();
