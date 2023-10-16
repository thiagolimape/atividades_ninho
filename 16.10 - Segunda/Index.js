const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const produtoController = require('./ProdutoController');  // Correção no nome do arquivo

app.

use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rota para renderizar a página index.ejs
app.get('/', (req, res) => {
  const produtos = produtoController.getProdutos();
  res.render('index', { produtos });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
