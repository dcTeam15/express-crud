const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');

router.get('/', (req, res) => {
    res.send(usuarioController.listarUsuarios());
});

router.post('/login', (req, res) => {
    res.send(usuarioController.login(req.body));
});

module.exports = router;