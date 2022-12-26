const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_schema', 'root', 'Kn_recon@18', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;