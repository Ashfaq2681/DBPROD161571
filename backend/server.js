require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require('./routes/user');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('uploads'))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  console.log(req.path, req.method);
  next();
});

app.use("/api/user", userRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    //port
    app.listen(process.env.PORT, () => {
      console.log("Db connected and On port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
