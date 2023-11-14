const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");

const Registration = require("./models/registers");
const { json } = require("express");

const port = process.env.Port || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/index", (req, res) => {
  res.render("index");
});
app.get("/register", (req, res) => {
  res.render("register");
});

// create new user in database
app.post("/register", async (req, res) => {
  try {
    const coustmerRegistration = new Registration({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      address: req.body.address,
      password: req.body.password,
    });

    const registerd = await coustmerRegistration.save();

    res.status(201).render("login");
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const check = await Registration.findOne({email: req.body.email});
    if (check.password===req.body.password) {
      res.render("index");
    } else {
      res.send("Wrong Password");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/logout", async (req, res) => {
  try {
    res.render("login")
  } catch (error) {
    res.status(400).send(error);
  }
});


app.listen(port, () => {
  console.log(`server is running at port number ${port}`);
});
