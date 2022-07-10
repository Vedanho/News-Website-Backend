const express = require("express");
require("dotenv").config();
const { Router } = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path")

const app = express();

app.use("/public", express.static(path.resolve(__dirname + "/public")));
app.use(express.json());
app.use(cors());
app.use(require("./routes/index"));

mongoose
  .connect(process.env.MONGO_SERVER)
  .then(console.log("Connected to MongoDB"))
  .catch((e) => console.log(e.message));

app.listen(4500, () => console.log("Server is working"));
