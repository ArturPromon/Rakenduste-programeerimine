const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Item = require("./item.model.js");

router.delete("/:itemId", (req, res) => {
    Item.deleteOne({"_id" : mongoose.Types.ObjectId(req.params.itemId)}, (err)=> {
        if(err){
            console.log(err);
         return    res.send(500);}
        console.log("save success!");
        return res.send(204);

    })
});

/**
 * Create a new item
 */

router.post("/", (req, res) => {
    const props = {
        imgSrc: req.body.imgSrc,
        title: req.body.title,
        price: req.body.price,
        category: req.body.category,
    };
    const item1 = new Item(props);
    item1.save(err => {
        if (err){
            console.log("Error: ", err);
            res.send(500);
            return;
        }
        console.log("Success create!");
    });
    res.send(201);
});

/**
 * Rechange title
 */
router.put("/:itemId", (req,res) =>{
    Item.findById(req.params.itemId, function (err, item){
        console.log(item);
        if(err){
            console.log("Error", err);
            res.status(500).send(err);
            return;
        }
        item.title = req.body.title;
        //item.price = req.body.price;
        item.save();
        res.send(item);
    });
});

router.post("/", (req, res) => {
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
    Returns and item
   */
  
  router.get("/:itemId", (req, res) => {
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
router.get("/",(req, res)=>{
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