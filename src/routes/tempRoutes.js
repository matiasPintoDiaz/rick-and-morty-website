const express = require('express');
const router = express.Router(); // Para modularizazr las rutas

router
    .get('/', (req, res) => {
        res.send('root get');
    })
    .get('/character', (req, res) => {
        res.send('character get');
    })
    .get('/location', (req, res) => {
        res.send('location get');
    })
    .get('/episode', (req, res) => {
        res.send('episode get');
    });


module.exports = router;