const axios = require('axios');

const getAllCharacters = () => {
    const allCharacters = axios.get('');
    return allCharacters;
};

const getAllLocations = () => {
    const allLocartions = axios.get('');
    return allLocartions;
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