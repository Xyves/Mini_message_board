require("dotenv").config();
let ejs = require("ejs");
let express = require("express");
let app = express();
const path = require("path");
const indexRouter = require("./routes/Router");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
app.use("/", indexRouter);
