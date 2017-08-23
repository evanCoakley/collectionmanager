const express = require("express");
const mongoose = require("mongoose");
const bluebird = require("bluebird");
const bodyparser = require("body-parser");
const logger = require("morgan");
const Comic = require("./models/Hero");

const app = express();
mongoose.Promise = bluebird;
mongoose.connect("mongodb://localhost:27017/heroLibrary");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(logger("dev"));

app.post("/comichero", function (req, res) {
    console.log(req.body);
    let newHero = new Hero(req.body);

    newComic
        .save()
        .then(function (savedHero) {
            res.send(savedHero);
        })
        .catch(function (err) {
            res.status(500).send(err);
        });
});
app.get("/comichero", function (req, res) {
    Hero.find()
        .then(function (foundComic))

})