const express = require('express')
const app = express()
const path = require("path");
const PORT = process.env.PORT || 3000;
const DB = require("./database.js");
const mongoose = require("mongoose");
require('dotenv').config();


var kittySchema = new mongoose.Schema({
  name: String
});

var Kitten = mongoose.model("kitten", kittySchema);

const kitten1 = new Kitten({
  name: "red cat 2"
});

const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0-xjpng.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(DB_URL)
  .then(()=> {
    console.log("Database access success!");
    kitten1.save(err =>{
      if(err){
        console.log("we had an error");
      }
      else{
        console.log("Success save!");
      }
    })
  })
  .catch (err =>{
    console.log("error happened", err); 
  });

/**
 * GET all items
 */
app.get("/api/items",(req, res)=>{
  res.json(DB.getItems());
});

/**
 * GET item with id
 */

app.get("/api/items/:itemId",(req, res)=>{
  res.send(DB.getItem(req.params.itemId));
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.get('/items/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.use(express.static('dist'));

// Heroku needs process.env.PORT
app.listen(PORT, () => {
  console.log("Server started", PORT);
  console.log("http://localhost:"+PORT);
});