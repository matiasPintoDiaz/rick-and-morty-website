const express = require("express");
const router = express.Router(); // Para modularizazr las rutas
const tempController = require('../controllers/tempController');

router
  .get("/", )
  .get("/character", tempController.getAllCharacters)
  .get("/character/:characterId", tempController.getOneCharacter)
  .get("/location", tempController.getAllLocations)
  .get("/location/:locationId", tempController.getOneLocation)
  .get("/episode", tempController.getAllEpisodes)
  .get("/episode/:episodeId", tempController.getOneEpisode);

module.exports = router;
