const express = require("express");
const routes = require("./routes/routes");
const hbs = require("hbs");
const fs = require("fs");

const app = express();
const port = 3010;

hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper("getCurrentYear", () => new Date().getFullYear());

app.use((req, res, next) => {
  const date = new Date().toString();
  const log = `${date}: ${req.url}`;
  console.log(log);
  fs.appendFile(__dirname + "/log.txt", log + "\n", err => {
    if (err) console.log(err);
  });
  next();
});

app.use((req, res, next) => {
  res.render("maintenance");
});

app.set("view engine", "hbs");
app.use("/", routes);
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname + "/public"));

app.listen(port, () => console.log(`Listening on port ${port}`));
