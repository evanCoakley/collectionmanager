const express = require("express");
const mongoose = require("mongoose");
const bluebird = require("bluebird");
const bodyparser = require("body-parser");
const logger = require("morgan");
const Hero = require("./models/Hero");

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
        .then(function (foundHero) {
            if (!foundComic) {
                return res.send({ msg: "No Hero Found" })
            }
            res.send(foundComics)
        })
        .catch(function (err) {
            res.status(500).send(err);
        });

});

app.get("/comichero/:id", function (req, res) {
    Hero.findById(req.params.id)
        .then(function (foundHero) {
            if (!foundBook) {
                return res.send({ msg: "No Hero Found" });
            }
            res.send(foundHero);
        })
})





app.listen(8000, () => console.log("Server running on port 8000!"));