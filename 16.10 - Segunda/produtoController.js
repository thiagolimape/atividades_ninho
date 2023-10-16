let produtos = [
    { id: 1, nome: 'Produto 1', preco: 10.99 },
    { id: 2, nome: 'Produto 2', preco: 20.49 },
    { id: 3, nome: 'Produto 3', preco: 15.00 }
  ];
  
  function getProdutos() {
    return produtos;
  }
  
  function adicionarProduto(nome, preco) {
    const id = produtos.length + 1;
    const produto = { id, nome, preco };
    produtos.push(produto);
  }
  
  module.exports = {
    getProdutos,
    adicionarProduto
  };
  