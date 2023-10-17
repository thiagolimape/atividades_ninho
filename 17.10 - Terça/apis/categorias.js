const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const appCategorias = express();
const port = 3000;
const connection = require('./mysql');


// Middleware para lidar com dados codificados no corpo da solicitação
appCategorias.use(express.urlencoded({ extended: true }));
appCategorias.use(express.json());




appCategorias.get('/categorias', (req, res) => {
  const { titulo, senha } = req.body;

  // Inserir os dados na tabela 'usuario' no banco de dados usando uma query parametrizada
  const sql = 'SELECT * from categorias';
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

appCategorias.get('/categorias/:id', (req, res) => {
  const { id } = req.params;
  const { titulo, senha } = req.body;

  // Inserir os dados na tabela 'usuario' no banco de dados usando uma query parametrizada
  const sql = 'SELECT * from categorias where id='+id;
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

appCategorias.put('/categorias/:id', (req, res) => {
  const { id } = req.params;
  const { nome} = req.body;

  // Inserir os dados na tabela 'usuario' no banco de dados usando uma query parametrizada
  const sql = 'update categorias set nome=? where id = ? ';
  connection.query(sql, [nome, id], (err, result) => {
    if (err) {
      console.error('Erro ao inserir registro: ' + err.message);
      res.status(500).json({ error: 'Erro ao inserir registro' });
    } else {
      console.log('Registro inserido com sucesso!');
      res.status(200).json({ message: 'Registro inserido com sucesso' });
    }
  });
});

appCategorias.post('/categorias', (req, res) => {
    const { nome} = req.body;
  
    // Inserir os dados na tabela 'usuario' no banco de dados usando uma query parametrizada
    const sql = 'INSERT INTO categorias (nome) VALUES (?)';
    connection.query(sql, [nome], (err, result) => {
      if (err) {
        console.error('Erro ao inserir registro: ' + err.message);
        res.status(500).json({ error: 'Erro ao inserir registro' });
      } else {
        console.log('Registro inserido com sucesso!');
        res.status(201).json({ message: 'Registro inserido com sucesso' });
      }
    });
  });

appCategorias.delete('/categorias/:id', (req, res) => {
    const { id } = req.params;
  
    // Inserir os dados na tabela 'usuario' no banco de dados usando uma query parametrizada
    const sql = 'delete from categorias  where id = ? ';
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


  module.exports = appCategorias;





