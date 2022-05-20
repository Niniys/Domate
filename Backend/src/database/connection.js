require('dotenv').config();
const { Sequelize } = require('sequelize');

const Mapa = require('../model/mapa');
const Usuario = require('../model/usuario');
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
    Usuario.init(sequelize);

    Mapa.associate(sequelize.models);
    Play.associate(sequelize.models);
    Usuario.associate(sequelize.models);
    

    sequelize.sync({ force : true });
}

module.exports = {
    sequelize,
    sync
}