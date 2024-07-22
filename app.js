require("dotenv").config();
let ejs = require("ejs");
let express = require("express");
let app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const indexRouter = require("./routes/index");
const newRouter = require("./routes/new");

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});

app.use("/", indexRouter);
app.use("/new", newRouter);
