const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HeroSchema = new Schema({
    heroName: String,
    comicUniverse: String,
    powers: {
        firstPower: String,
        secondPower: String
    },
    yearsActive: Number,
    associates: {
        closeAss1: String,
        closeAss2: String
    },
    nemeses: {
        nemesis1: String,
        nemesis2: String,
    }

})

module.exports = mongoose.model("Comic", HeroSchema);
