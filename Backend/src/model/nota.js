const { Model, DataTypes } = require('sequelize');

class notas extends Model{
    static init(datacon){
        super.init(
            {
                anot: {
                    type: DataTypes.STRING,
                    allowNull: false
                }
            },
            {
                sequelize: datacon,
                tableName: 'notas',
                modelName: 'nota'
                
            }
        )
    }
    static associate(models){
        notas.hasMany(models.usuario, {foreignKey: 'id_nota'})
    }
}
module.exports = notas;