const axios = require('axios');

const getAllCharacters = async() => {
    const allCharacters = await axios.get('https://rickandmortyapi.com/api/character');
    const characters = allCharacters.data;
    return characters;
};

const getOneCharacter = async(characterId) => {
    const oneCharacter = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`);
    const character = oneCharacter.data;
    return character;
};

const getAllLocations = async() => {
    const allLocations = await axios.get('https://rickandmortyapi.com/api/location');
    const locations = allLocations.data;
    return locations;
};

const getOneLocation = async(locationId) => {
    const oneLocation = await axios.get(`https://rickandmortyapi.com/api/location/${locationId}`);
    const location = oneLocation.data;
    return location;
};

const getAllEpisodes = async() => {
    const allEpisodes = await axios.get('https://rickandmortyapi.com/api/episode');
    const episodes = allEpisodes.data;
    return episodes;
};

const getOneEpisode = async(episodeId) => {
    const oneEpisode = await axios.get(`https://rickandmortyapi.com/api/episode/${episodeId}`);
    const episode = oneEpisode.data;
    return episode;
};


module.exports = {
    getAllCharacters,
    getOneCharacter,
    getAllLocations,
    getOneLocation,
    getAllEpisodes,
    getOneEpisode
};