const express = require("express");
const router = express.Router(); // Para modularizazr las rutas
const tempController = require('../controllers/tempController');

router
  .get("/", )
  .get("/character", tempController.getAllCharacters)
  .get("/location", tempController.getAllLocations)
  .get("/episode", tempController.getAllEpisodes);

module.exports = router;
