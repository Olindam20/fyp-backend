require("dotenv").config();
const mongoose = require("mongoose");
const mongoURI = mongodb+srv://olindamsarma2001:7kc1Sb33Xiut7vv9@nits-database-cluster.irzixgj.mongodb.net/College-Management-System;

const connectToMongo = () => {
  mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then(() => {
      console.log("Connected to MongoDB Successfully");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB", error);
    });
};

module.exports = connectToMongo;
