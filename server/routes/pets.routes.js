const PetController = require("../controllers/pets.controller");


module.exports = (app) => {
    app.post('/api/pets', PetController.addPet);
    app.get('/api/pets', PetController.getAllPets);
    app.get('/api/pets/:_id', PetController.getPetById);
    app.delete('/api/pets/:_id', PetController.deletePet);
    app.put('/api/pets/:_id', PetController.updatePet)
};