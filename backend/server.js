require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require('./routes/user');
const path=require('path')
const fs = require("fs");
const https = require('https');
const http = require('http');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(express.static('uploads'))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/user", userRoute);

// certificates:
const sslOptions = {
  key: fs.readFileSync('/etc/letsencrypt/live/api.curatedgallery.org/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/api.curatedgallery.org/fullchain.pem')
};

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    https.createServer(sslOptions, app).listen(443, () => {
      console.log(`HTTPS server running at https://api.curatedgallery.org`);
    });

    http.createServer((req, res) => {
      res.writeHead(301, { Location: 'https://' + req.headers.host + req.url });
      res.end();
    }).listen(80);

    // For debugging
    // app.listen(80, (req, res) => {
    //   console.log("Listening at http://localhost:80/api");
    // });
  })
  .catch((error) => {
    console.log(error);
  });
