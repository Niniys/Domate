const { Model, DataTypes } = require('sequelize');

class play extends Model{
    static init(datacon){
        super.init(
            {
                link_musica: {
                    type: DataTypes.BLOB(),
                    allowNull: false
                }
            },
            {
                sequelize: datacon,
                tableName: 'plays',
                modelName: 'play'
            }
        )
    }

    static associate(models){
        play.hasMany(models.usuario, {foreignKey: 'id_play'});
    }
}

module.exports = play;