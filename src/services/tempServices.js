const axios = require('axios');

const getAllCharacters = () => {
    const allCharacters = axios.get('');
    return allCharacters;
};

const getAllLocations = () => {
    const allLocations = axios.get('');
    return allLocations;
};

const getAllEpisodes = () => {
    const allEpisodes = axios.get('');
    return allEpisodes;
};

module.exports = {
    getAllCharacters,
    getAllLocations,
    getAllEpisodes
};