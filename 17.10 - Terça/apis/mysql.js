const express = require('express');
const mysql = require('mysql');

// Configurar conexão com o MySQL
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'projeto'
  });
  
  connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao MySQL: ' + err.message);
    } else {
      console.log('Conectado ao MySQL');
    }
  });

  module.exports = connection;