let produtos = [
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

const listarUmProduto = (posicao) => {
    return produtos[posicao];
}

const cadastrarProduto = (produto) => {
    produtos.push(produto);
    return produto;
}

const editarProduto = (posicao, produto) => {
    produtos[posicao] = produto;
    return produtos[posicao];
}

const deletarProduto = (posicao) => {
    produtos = produtos.filter((produto, index) => index != posicao);
    return produtos;
}

module.exports = {
    listarProdutos,
    listarUmProduto,
    cadastrarProduto,
    editarProduto,
    deletarProduto
}