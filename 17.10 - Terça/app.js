const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const apiLivro = require('./apis/livros');
const apiCategoria = require('./apis/categorias');


// Middleware para lidar com dados codificados no corpo da solicitação
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', apiLivro);
app.use('/', apiCategoria);



// Define a rota para a página HTML
app.get('/tela/livros', (req, res) => {
  res.sendFile(__dirname + '/pages/livros/listLivros.html');
});

// Define a rota para a página HTML
app.get('/addlivros', (req, res) => {
  res.sendFile(__dirname + '/pages/livros/livros.html');
});

// Define a rota para a página HTML
app.get('/editlivros', (req, res) => {
  res.sendFile(__dirname + '/pages/livros/editLivro.html');
});




// Define a rota para a página HTML
app.get('/tela/categorias', (req, res) => {
  res.sendFile(__dirname + '/pages/categorias/listCategorias.html');
});

// Define a rota para a página HTML
app.get('/addcategorias', (req, res) => {
  res.sendFile(__dirname + '/pages/categorias/categorias.html');
});

// Define a rota para a página HTML
app.get('/editcategorias', (req, res) => {
  res.sendFile(__dirname + '/pages/categorias/editCategoria.html');
});




// Define a rota para a página HTML
app.get('/tela/usuarios', (req, res) => {
  res.sendFile(__dirname + '/pages/usuarios/listUsuarios.html');
});

// Define a rota para a página HTML
app.get('/addusuarios', (req, res) => {
  res.sendFile(__dirname + '/pages/usuarios/usuarios.html');
});

// Define a rota para a página HTML
app.get('/editusuarios', (req, res) => {
  res.sendFile(__dirname + '/pages/usuarios/editUsuarios.html');
});




// Define a rota para a página HTML
app.get('/tela/pedidos', (req, res) => {
  res.sendFile(__dirname + '/pages/pedidos/pedidos.html');
});

// Define a rota para a página HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pages/index.html');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
