const express = require("express");
const bookRouter = require("./routes/book");
const sequelize = require("./util/database");
const Book = require("./model/book");
const bodyParser = require("body-parser");

const PORT = 5001;

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bookRouter);

sequelize.sync().then(() => {
  console.log("Connected to database");
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
});
