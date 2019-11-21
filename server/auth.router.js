const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const userController = require("./user.controller.js");
const jwt = require("jsonwebtoken");

const validationMiddleware = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
};

router.post("/verify", (req,res) => {
    const bearerHeader = req.headers["authorization"];
    if(!bearerHeader) return res.send(400);
    const token = bearerHeader.split(" ")[1];
    if(!token) return res.send(400);
    jwt.verify( token, process.env.JWT_KEY, (err, decoded) => {
        if(err) {
            console.log(err);
            return res.status(401);
        }
        res.status(200).send(decoded);
    });
});


/** Login */
router.post("/login", userController.login);

/** Creates new user (signup) */
router.post("/signup", [
        // username must be an email
        check('email').isEmail().normalizeEmail(),
        // password must be at least 5 chars long
        check('password')
            .isLength({ min: 5 }).withMessage("must be at least 5 char long")
            .matches(/\d/).withMessage("must contain a number")
            .not().isIn(["12345", "password", "parool"]).withMessage("Do not use common password!")
    ],
    validationMiddleware,
    userController.signup);

    module.exports = router; 