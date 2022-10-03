const tempServices = require('../services/tempServices');

const getAllCharacters = async(req, res) => {
    const allCharacters = await tempServices.getAllCharacters();
    res.send(allCharacters);
};

const getAllLocations = async(req, res) => {
    const allLocations = await tempServices.getAllLocations();
    res.send(allLocations);
};

const getAllEpisodes = async(req, res) => {
    const allEpisodes = await tempServices.getAllEpisodes();
    res.send(allEpisodes);
};

module.exports = {
    getAllCharacters,
    getAllLocations,
    getAllEpisodes
};