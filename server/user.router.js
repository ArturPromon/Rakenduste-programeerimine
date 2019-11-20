const express = require('express');
const router = express.Router();
const DB = require("./database.js");
const User = require("./user.model.js")
const mongoose = require("mongoose");
const bcryptjs = require('bcryptjs');


/**
 * Get all users
 */
router.get("/api/users", (req, res) => {
    User.find({}, (err, docs) => {
        if(err) return handleError(err, res);
        res.status(200).json(docs);
    });
});

/**
 * Login
 */
router.post("/api/users/login", (req, res) => {
    User.login(req.body)
        .then(user =>{
            res.status(200).json(user);
        })
        .catch(err => {
            return handleError(err, res);
        });

    // User.findOne({email: req.body.email}, (err, doc) => {
    //     if(err) return handleError(err, res);
    //     res.send(doc);
    // })
});

/**
 * Creates new user (signup)
 */
router.post("/api/users/signup", (req, res) => {
    User.signup(req.body)
        .then(user =>{
            res.status(200).json(user);
        })
        .catch(err => {
            return handleError(err, res);
        });
});

/**
 * Delete all users
 */
router.delete("/api/users", (req, res) => {
    User.deleteMany({}, (err, docs) => {
        if(err) return handleError(err, res);
        console.log(docs);
        console.log("Success deleting many users");
        res.send(204);
    });
});

function handleError(err, res){
    console.log(err);
    res.send(500);
}


module.exports = router;