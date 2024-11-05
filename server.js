const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const port = 5000;

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.sgcni.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("connected to mongodb");
  } catch (error) {
    throw error;
  }
};

app.listen(port, () => {
  connect();
  console.log(`Example app listening on port ${port}`);
});
