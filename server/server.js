const express = require('express')
const app = express()
const path = require("path");
const PORT = process.env.PORT || 3000;
const ItemRouter = require("./item.router.js");
const userRouter = require("./user.router.js");
const DB = require("./database.js");
const bodyParser = require("body-parser");
const authRouter = require("./auth.router");


app.use(bodyParser.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1",ItemRouter);
app.use("/api/v1/",userRouter);
app.use("/api/v1/", userRouter);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.get('/items/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.use(express.static('dist'));

function listen(){
// Heroku needs process.env.PORT
app.listen(PORT, () => {
  console.log("Server started", PORT);
  console.log("http://localhost:"+PORT);
});
}

DB.connect()
    .then(() => {
        listen();
    })
    .catch(err => {
        console.log("Error connecting", err);
    });

