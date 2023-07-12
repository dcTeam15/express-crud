const produtos = [
    {
        nome: 'Boné',
        valor: 19.90
    },
    {
        nome: 'Tenis da Nike',
        valor: 730.00
    }
];

const listarProdutos = () => {
    return produtos;
}
const listarUmProduto = () => {}
const cadastrarProduto = (produto) => {
    produtos.push(produto);
    return produtos;
}
const editarProduto = () => {}
const deletarProduto = () => {}

module.exports = {
    listarProdutos,
    listarUmProduto,
    cadastrarProduto,
    editarProduto,
    deletarProduto
}