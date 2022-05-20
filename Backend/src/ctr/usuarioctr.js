const Usuario = require('../model/usuario');


const Mapa = require('../model/mapa');
const Play = require('../model/play');



const create = async (req, res) => {
    const data = req.body;

    const ret = await Usuario.create(data);

    res.json(ret);
}

const read = async (req, res) => {
    const id = req.params.id;
    const id_Usuario = req.query.id;

    let filtro = {};

    if(id !== undefined) filtro = {where: {id: id}};

    filtro.attributes = { 
        exclude: ['id_mapa', 'id_play']
    }
    filtro.include = [
        {model: Mapa},
        {model: Play},

    ];

    if(id_Usuario !== undefined){
        filtro.include[0].where = {id: id_Usuario}
    }

    const ret = await Usuario.findAll(filtro);

    res.json(ret);
}

const update = async (req, res) => {
    const id = req.params.id;

    const data = req.body;

    let ret = await Usuario.update(data, {where:{id: id}});

    ret = await Usuario.findAll({where: {id: id}});

    res.json(ret);
}

const remove = async (req, res) => {
    const id = req.params.id;

    const ret = await Usuario.destroy({where: {id: id}});

    if(ret == 1) {
        res.json({id: id})
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