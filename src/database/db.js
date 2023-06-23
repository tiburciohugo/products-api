const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const db = client.db("ecommerce");

const products = db.collection("Products");

const orders = db.collection("Orders");

module.exports = { client, products, orders };
