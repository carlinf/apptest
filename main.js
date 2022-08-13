
require('dotenv').config()
const express =  require('express')
const app = express()

const { MongoClient } = require('mongodb');

const url = process.env.MONGO_URL;
const client = new MongoClient(url);
const dbName = 'books';

const db = client.db(dbName);
const collection = db.collection('books');



app.use("/static", express.static("static"))

app.get("/books", async function(req,res){

    // let list = [
    //     {title: "Harry Potter", author: "Jk R", genre: "Friction"},
    //     {title: "Dummy Book" ,author: "Jk C", genre: "Friction"},
    //     {title: "Let us C", author: "Yashwant K", genre: "Education"},


    // ]

    let list = await collection.find({}).toArray();

    res.json(list)

})

app.listen(process.env.PORT)

