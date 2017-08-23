const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HeroSchema = new Schema({
    heroName: String,
    comicUniverse: String,
    powers: {
        power1: String,
        power2: String,

        origin: String,
        enum: ["super-human", "above-average", "average", "below-average"]

    },
    yearsActive: Number,
    associates: {
        closeAssoc1: String,
        closeAssoc2: String,

    },
    nemeses: {
        nemesis1: String,
        nemesis2: String,
    }

})

module.exports = mongoose.model("Comic", HeroSchema);
