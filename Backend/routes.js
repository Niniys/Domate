const express = require('express');

const route = express.Router();


const Usuarioctr = require('./src/ctr/usuarioctr');
const Playctr = require('./src/ctr/playctr');
// const Rankctr = require('./src/ctr/rankctr');
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

// route.post('/rank', Rankctr.create);
// route.get('/rank', Rankctr.read);
// route.get('/rank/:id', Rankctr.read);
// route.put('/rank/:id', Rankctr.update);
// route.delete('/rank/:id', Rankctr.remove);

route.post('/mapa', Mapactr.create);
route.get('/mapa', Mapactr.read);
route.get('/mapa/:id', Mapactr.read);
route.put('/mapa/:id', Mapactr.update);
route.delete('/mapa/:id', Mapactr.remove);



module.exports = route;