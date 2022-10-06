const tempServices = require("../services/tempServices");

const getAllCharacters = async (req, res) => {
  const allCharacters = await tempServices.getAllCharacters();
  res.send(allCharacters);
};

const getOneCharacter = (req, res) => {
  const { characterId } = req.params;

  if (!characterId) {
    return;
  }

  const oneCharacter = tempServices.getOneCharacter(characterId);
  res.send({ status: "OK", data: oneCharacter });
};

const getAllLocations = async (req, res) => {
  const allLocations = await tempServices.getAllLocations();
  res.send(allLocations);
};

const getOneLocation = async (req, res) => {
  const { locationId } = req.params;

  if (!locationId) {
    return;
  }

  const oneLocation = tempServices.getOneLocation(locationId);
  res.send({ status: "OK", data: oneLocation });
};

const getAllEpisodes = async (req, res) => {
  const allEpisodes = await tempServices.getAllEpisodes();
  res.send(allEpisodes);
};

const getOneEpisode = async (req, res) => {
  const { episodeId } = req.params;

  if (!episodeId) {
    return;
  }

  const oneEpisode = tempServices.getOneEpisode(episodeId);
  res.send({ status: "OK", data: oneEpisode });
};

module.exports = {
  getAllCharacters,
  getOneCharacter,
  getAllLocations,
  getOneLocation,
  getAllEpisodes,
  getOneEpisode
};
