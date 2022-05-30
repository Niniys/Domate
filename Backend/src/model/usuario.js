const { Model, DataTypes } = require('sequelize');

class usuario extends Model{
    static init(datacon){
        super.init(
            {
                nome_usuario: {
                    type: DataTypes.STRING(50),
                    unique: true,
                    validade: {
                        isUsuario:{
                            msg: "Usuario inválido"
                        },
                    },
                    allowNull: false
                },
                senha: {
                    type: DataTypes.STRING(50),
                    allowNull: false
                },
                id_mapa: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    references: {
                        model: 'mapas',
                        key: 'id',
                    }
                },
                id_play: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    references: {
                        model: 'plays',
                        key: 'id',
                    }
                },
                id_nota: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    references: {
                        model: 'notas',
                        key: 'id',
                    }
                },
            },
            {
                sequelize: datacon,
                tableName: 'usuarios',
                modelName: 'usuario'
            }
        )
    }

    static associate(models){
        usuario.belongsTo(models.nota, {foreignKey: 'id_nota'});
        usuario.belongsTo(models.mapa, {foreignKey: 'id_mapa'});
        usuario.belongsTo(models.play, {foreignKey: 'id_play'});
    }

}

module.exports = usuario;