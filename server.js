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

    newHero
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
            if (!foundHero) {
                return res.send({ msg: "No Hero Found" })
            }
            res.send(foundHero)
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
app.put("/comichero/:id", function (req, res) {
    Hero.findByIdAndUpdate(req.params.id, req.body)
        .then(function (updatedHero) {
            if (!updatedHero) {
                return res.send({ msg: "Could not update Hero" });
            }

            res.send(updatedHero);
        })
        .catch(function (err) {
            res.status(500).send(err);
        });
});
app.delete("/comichero/:id", function (req, res) {
    Hero.findByIdAndRemove(req.params.id)
        .then(function (message) {
            res.send(message);
        })
        .catch(function (err) {
            res.status(500).send(err);
        });
});
app.delete("/comichero", function (req, res) {
    Hero.remove()
        .catch(function (err) {
            res.status(500).send(err);
        });
});






app.listen(8000, () => console.log("Server running on port 8000!"));