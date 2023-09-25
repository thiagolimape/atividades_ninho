const Sequelize = require("sequelize");

const connection = new Sequelize('ninho',
'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;