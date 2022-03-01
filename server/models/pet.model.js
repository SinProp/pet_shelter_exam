const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    
    petName: {
        type: String,
        required:[true, "This pet needs a name!"],
        minlength: [3, "This pet's name should be at least 3 characters long"],
    },

    petType: {
        type: String,
        required:[true, "This pet needs a type or species!"],
        minlength: [3, "This pet's type should be at least 3 characters long"],
    },

    petDescription: {
        type: String,
        required:[true, "This pet needs a description!"],
        minlength: [3, "This pet's description should be at least 3 characters long"],
    },

    skillOne: {
        type: String,
        required:[false],
    },

    skillTwo: {
        type: String,
        required:[false],
    },

    skillThree: {
        type: String,
        required:[false],
    },
});

const Pet = mongoose.model("Pet", PetSchema);
module.exports = Pet;


