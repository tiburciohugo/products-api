const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

const db = client.db("ecommerce");

const products = db.collection("Products");

module.exports = { client, products };
