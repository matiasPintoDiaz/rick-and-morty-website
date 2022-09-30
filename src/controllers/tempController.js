const tempServices = require('../services/tempServices');

const getAllCharacters = (req, res) => {
    const allCharacters = tempServices.getAllCharacters();
    return allCharacters;
};

const getAllLocations = (req, res) => {
    const allLocations = tempServices.getAllLocations();
    return allLocations;
};

const getAllEpisodes = (req, res) => {
    const allEpisodes = tempServices.getAllEpisodes();
    return allEpisodes;
};

module.exports = {
    getAllCharacters,
    getAllLocations,
    getAllEpisodes
};