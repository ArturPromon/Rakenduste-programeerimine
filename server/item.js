const express = require('express');
const router = express.Router();
//const DB = require("./database.js");
const mongoose = require("mongoose");



const itemSchema = new mongoose.Schema({
    imgSrc: {type: String, reuired: true},
    title: {type: String, reuired: true},
    price: {type: Number, reuired: true},
    category: {type: String, reuired: true},
    createdAt: {type: Date, default: Date.now},
});

const Item = mongoose.model("Item", itemSchema);

router.delete("/api/items/:itemId", (req,res) => {
    Item.deleteOne({"_id" : mongoose.Types.ObjectId(req.params.itemId)}, (err)=> {
        if(err){
            console.log(err);
         return    res.send(500);}
        console.log("save success!");
        return res.send(204);

    })
});


router.post("/api/items", (req, res) => {
    const props = {
        imgSrc: "google.com",
        title: "phone red",
        price: 200,
        category: "phones",
    }
    const item1 = new Item(props);
    item1.save(err =>{
        if(err){
            console.log("error", err);
            res.send(500);
            return;
        }
        console.log("success create!");
        res.send(201); 
    });
});

  /**
   * GET item with id
   */
  
  router.get("/api/items/:itemId",(req, res)=>{
    Item.findById(req.params.itemId, function (err, item){
        if(err){
            console.log("Error", err);
            res.status(500).send(err);
            return;
        }
        res.send(item);
    });
  });

/**
 * GET all items
 */
router.get("/api/items",(req, res)=>{
    Item.find({}, function(err, items){
        if(err){
            console.log("Error", err);
            res.status(500).send(err);
            return;
        }
        res.send(items);
    });

    //res.json(DB.getItems());
  });
  


module.exports = router;