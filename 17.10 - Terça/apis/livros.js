const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const appLivros = express();
const port = 3000;
const connection = require('./mysql');



// Middleware para lidar com dados codificados no corpo da solicitação
appLivros.use(express.urlencoded({ extended: true }));
appLivros.use(express.json());


appLivros.post('/livros', (req, res) => {
  const { titulo, autor, ano_publicacao, categoria_id } = req.body;

  // Inserir os dados na tabela 'usuario' no banco de dados usando uma query parametrizada
  const sql = 'INSERT INTO livros (titulo, autor,ano_publicacao, categoria_id) VALUES (?, ?, ?, ?)';
  connection.query(sql, [titulo, autor,ano_publicacao, categoria_id], (err, result) => {
    if (err) {
      console.error('Erro ao inserir registro: ' + err.message);
      res.status(500).json({ error: 'Erro ao inserir registro' });
    } else {
      console.log('Registro inserido com sucesso!');
      res.status(201).json({ message: 'Registro inserido com sucesso' });
    }
  });
});

appLivros.get('/livros', (req, res) => {
  const { titulo, senha } = req.body;

  // Inserir os dados na tabela 'usuario' no banco de dados usando uma query parametrizada
  const sql = 'SELECT * from livros';
  connection.query(sql,(err, result) => {
    if (err) {
      console.error('Erro ao consultar registro: ' + err.message);
      res.status(500).json({ error: 'Erro ao consultar registro' });
    } else {
      console.log('Registro consultado com sucesso!');
      res.json(result);
    }
  });
});

appLivros.get('/livros/:id', (req, res) => {
  const { id } = req.params;
  const { titulo, senha } = req.body;

  // Inserir os dados na tabela 'usuario' no banco de dados usando uma query parametrizada
  const sql = 'SELECT * from livros where id='+id;
  connection.query(sql,(err, result) => {
    if (err) {
      console.error('Erro ao consultar registro: ' + err.message);
      res.status(500).json({ error: 'Erro ao consultar registro' });
    } else {
      console.log('Registro consultado com sucesso!');
      res.json(result[0]);
    }
  });
});

appLivros.put('/livros/:id', (req, res) => {
  const { id } = req.params;
  const { titulo, autor, ano_publicacao, categoria_id } = req.body;

  // Inserir os dados na tabela 'usuario' no banco de dados usando uma query parametrizada
  const sql = 'update livros set titulo=?, autor=?, ano_publicacao=?, categoria_id=? where id = ? ';
  connection.query(sql, [titulo, autor, ano_publicacao, categoria_id, id], (err, result) => {
    if (err) {
      console.error('Erro ao inserir registro: ' + err.message);
      res.status(500).json({ error: 'Erro ao inserir registro' });
    } else {
      console.log('Registro inserido com sucesso!');
      res.status(200).json({ message: 'Registro inserido com sucesso' });
    }
  });
});

appLivros.delete('/livros/:id', (req, res) => {
    const { id } = req.params;
  
    // Inserir os dados na tabela 'usuario' no banco de dados usando uma query parametrizada
    const sql = 'delete from livros  where id = ? ';
    connection.query(sql, [id], (err, result) => {
      if (err) {
        console.error('Erro ao inserir registro: ' + err.message);
        res.status(500).json({ error: 'Erro ao inserir registro' });
      } else {
        console.log('Registro inserido com sucesso!');
        res.status(200).json({ message: 'Registro inserido com sucesso' });
      }
    });
  });


  module.exports = appLivros;





