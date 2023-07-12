const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.get('/', (req, res) => {
    res.send(produtoController.listarProdutos());
});

router.get('/:posicao', (req, res) => {
    res.send(produtoController.listarUmProduto(req.params.posicao));
});

router.post('/', (req, res) => {
    res.send(produtoController.cadastrarProduto(req.body));
});

router.post('/:posicao', (req, res) => {
    res.send(produtoController.editarProduto(req.params.posicao, req.body));
});

router.delete('/:posicao', (req, res) => {
    res.send(produtoController.deletarProduto(req.params.posicao));
});

module.exports = router;