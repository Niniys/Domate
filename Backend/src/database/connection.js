require('dotenv').config();
const { Sequelize } = require('sequelize');

const Usuario = require('../model/usuario');
const Notas = require('../model/nota');
const Mapa = require('../model/mapa');
const Play = require('../model/play');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, '', {
    host: process.env.HOST,
    dialect: 'mysql',
    define: {
        timestamps: false,
    }
});

const sync = () => {
    Mapa.init(sequelize);
    Play.init(sequelize);
    Notas.init(sequelize);
    Usuario.init(sequelize);

    Mapa.associate(sequelize.models);
    Play.associate(sequelize.models);
    Notas.associate(sequelize.models);
    Usuario.associate(sequelize.models);
    

    sequelize.sync({ force : false });
}

module.exports = {
    sequelize,
    sync
}