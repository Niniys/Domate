const express = require('express');

const route = express.Router();


const Usuarioctr = require('./src/ctr/usuarioctr');
const Playctr = require('./src/ctr/playctr');
const Notactr = require('./src/ctr/notactr');
const Mapactr = require('./src/ctr/Mapactr');



route.post('/usuario', Usuarioctr.create);
route.get('/usuario', Usuarioctr.read);
route.get('/usuario/:id', Usuarioctr.read);
route.put('/usuario/:id', Usuarioctr.update);
route.delete('/usuario/:id', Usuarioctr.remove);

route.post('/login', Usuarioctr.login);

route.post('/play', Playctr.create);
route.get('/play', Playctr.read);
route.get('/play/:id', Playctr.read);
route.put('/play/:id', Playctr.update);
route.delete('/play/:id', Playctr.remove);

route.post('/nota', Notactr.create);
route.get('/nota', Notactr.read);
route.get('/nota/:id', Notactr.read);
route.put('/nota/:id', Notactr.update);
route.delete('/nota/:id', Notactr.remove);

route.post('/mapa', Mapactr.create);
route.get('/mapa', Mapactr.read);
route.get('/mapa/:id', Mapactr.read);
route.put('/mapa/:id', Mapactr.update);
route.delete('/mapa/:id', Mapactr.remove);



module.exports = route;