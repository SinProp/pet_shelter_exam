const Pet = require("../models/pet.model");

const addPet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => res.json(newPet))
        .catch((err) => res.status(400).json({err}));
    };
const getAllPets = (req, res) => {
    Pet.find()
    .then((allPets) => res.json(allPets))
    .catch((err) => res.status(400).json({err}));
};

const getPetById = (req, res) => {
    Pet.findOne({ _id: req.params._id })
    .then((targetPet) => res.json(targetPet))
    .catch((err) => res.status(400).json({err}));
};

const deletePet = (req, res) => {
    Pet.deleteOne({ _id: req.params._id })
    .then((erasedPet) => res.json(erasedPet))
    .catch((err) => res.status(400).json({err}));
};

const updatePet = (req, res) => {
    Pet.findOneAndUpdate({ _id: req.params._id}, 
        req.body, 
        {
        new: true,
        runValidators: true,
        })
        .then(updatedPet => res.json(updatedPet))
        .catch((err) => res.status(400).json({err}));
    };


module.exports = {
    addPet,
    getAllPets,
    getPetById,
    deletePet,
    updatePet,
}