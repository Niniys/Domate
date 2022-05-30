const Usuario = require('../model/usuario');

const Notas = require('../model/nota');
const Mapa = require('../model/mapa');
const Play = require('../model/play');



const create = async (req, res) => {
    const data = req.body;
    let ret = [];
    try {

        ret = await Usuario.create(data);
        delete ret.dataValues.senha;
    }catch (err) {
        if(err.parent.code == 'ER_DUP_ENTRY'){
            ret = {
                msg: 'Usuario já cadastrado'
            }
            res.status(400)
        }
    }

    res.json(ret);
}

const read = async (req, res) => {
    const id = req.params.id;
    const id_Usuario = req.query.id;

    let filtro = {};

    if(id !== undefined){
        filtro = {where: {id: id}};
        filtro.include = [
            
            {model: Notas},
            {model: Play},
            {model: Mapa}
        ]
    }else{
        filtro.include = [
            

            {model: Play, attributes: {exclude: ['link_musica']}},
            {model: Mapa, attributes: {exclude: ['nome_mapa']}},
            {model: Notas, attributes: {exclude: ['anot']}},
            
        ]
    }


    filtro.attributes = { 
        exclude: ['id_mapa', 'id_play', 'id_nota']
    }

    if(id_Usuario !== undefined){
        filtro.include[0].where = {id: id_Usuario}
        
    }

    const ret = await Usuario.findAll(filtro = {
        attributes: {
            exclude: ['senha']
        }
    });
    res.json(ret)
}


const update = async (req, res) => {
    const id = req.params.id;

    const data = req.body;

    let ret = await Usuario.update(data, {where:{id: id}});

    ret = await Usuario.findAll({where: {id: id}});

    res.json("Alteração realizada com sucesso");
}

const remove = async (req, res) => {
    const id = req.params.id;

    const ret = await Usuario.destroy({where: {id: id}});

    if(ret == 1) {
        res.json({id: "id "+id+" removido com sucesso"})
    }else {
        res.status(400).send();
    }


}

const login = async (req, res) => {
    const data = req.body;

    console.log(data);

    const ret = await Usuario.findAll({
        attributes: {
            exclude: ['senha']
        },
        where: {
            nome_usuario: data.nome_usuario,
            senha: data.senha,
        }
    });

    res.json(ret);
}

module.exports = {
    create,
    read,
    update,
    remove,
    login
}