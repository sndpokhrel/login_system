//Express
const express = require("express");
const app = express();
// Config file
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
// Packages
const morgan = require("morgan");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const db = require("./utility/db");

// Morgan setup
app.use(morgan("dev"));

// Set view engine
app.set("view engine", [path.join(__dirname, "views")]);
app.use("/public", express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUnitialized: true,
    resave: true,
  })
);

app.use("/login", require("./router/login.routes"));
app.use("/", require("./router/dashboard.routes"));

db.then(() => {
  const PORT = process.env.PORT;
  app.listen(PORT, console.log(`Server started at port ${PORT}`));
}).catch((err) => {
  console.log(err);
});
