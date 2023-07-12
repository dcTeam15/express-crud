const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.get('/', (req, res) => {
    res.send(produtoController.listarProdutos());
});

router.post('/', (req, res) => {
    res.send(produtoController.cadastrarProduto(req.body));
});

router.delete('/', (req, res) => {
    res.send('Deletar produto');
});

module.exports = router;