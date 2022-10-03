const axios = require('axios');

const getAllCharacters = async() => {
    const allCharacters = await axios.get('https://rickandmortyapi.com/api/character');
    const characters = allCharacters.data;
    return characters;
};

const getAllLocations = async() => {
    const allLocations = await axios.get('https://rickandmortyapi.com/api/location');
    const locations = allLocations.data;
    return locations;
};

const getAllEpisodes = async() => {
    const allEpisodes = await axios.get('https://rickandmortyapi.com/api/episode');
    const episodes = allEpisodes.data;
    return episodes;
};

module.exports = {
    getAllCharacters,
    getAllLocations,
    getAllEpisodes
};