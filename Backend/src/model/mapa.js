const { Model, DataTypes } = require('sequelize');

class mapa extends Model{
    static init(datacon){
        super.init(
            {
                nome_mapa: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                imagem: {
                    type: DataTypes.BLOB('medium'),
                    allowNull: true
                }
            },
            {
                sequelize: datacon,
                tableName: 'mapas',
                modelName: 'mapa'
            }
        )
    }

    static associate(models){
        console.log(models);
        mapa.hasMany(models.usuario, {foreignKey: 'id_mapa'});
    }
}

module.exports = mapa;