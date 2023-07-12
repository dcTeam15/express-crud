const express = require('express');
const app = express();
const port = 8000;
const host = 'http://localhost';

const produtoRoutes = require('./src/routes/produtoRoutes');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world Nathan');
});

app.use('/produtos', produtoRoutes);

app.listen(port, () => {
    console.log(`O serviço está de pé: ${host}:${port}`);
});