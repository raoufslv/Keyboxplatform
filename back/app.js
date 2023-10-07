// app.js

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbConnection");
require("dotenv").config();

const db = require("./models");
const Role = db.role;

const app = express();

const corsOptions = {
  origin: "http://localhost:5173", // Replace this with the origin of your React app
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Connect Database
connectDB();

function initial() {
  Role.estimatedDocumentCount()
    .then((count) => {
      if (count === 0) {
        Promise.all([
          Role.create({ name: "adult" }),
          Role.create({ name: "enfant" }),
          Role.create({ name: "admin" }),
          Role.create({ name: "formateur" }),   
        ])
          .then(() => {
            console.log("Roles added to the roles collection");
          })
          .catch((err) => {
            console.error("Error adding roles to the roles collection:", err);
          });
      }
    })
    .catch((err) => {
      console.error("Error checking document count:", err);
    });
}

initial();

// routes
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Marhaba..." });
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));
