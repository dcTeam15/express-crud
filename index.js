const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const host = 'http://localhost';

const usuarioRoutes = require('./src/routes/usuarioRoutes');
const produtoRoutes = require('./src/routes/produtoRoutes');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.use('/usuario', usuarioRoutes);

app.use('/produtos', produtoRoutes);

app.listen(port, () => {
    console.log(`O serviço está de pé: ${host}:${port}`);
});