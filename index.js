const express = require("express");
const hbs = require("express-handlebars");

const app = express();

app.engine(
  "handlebars",
  hbs({
    defaultLayout: "main"
  })
);

app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index", { success: true, msg: "works" });
});

app.get("/about", (req, res) => {
  res.render("about", { success: true, msg: "works" });
});

app.use((req, res, next) => {
  res.status(404).render("404");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
