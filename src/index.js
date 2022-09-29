const express = require('express');
const app = express();
const router = require('./routes/tempRoutes');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`Estamos en /${req.baseUrl}`)
});

app.use('/rick&morty', router);

app.listen(PORT, () => {
    console.log(`Conectados en ${PORT}`);
});