const express = require('express')
const router = express.Router()

const clientes = require('./CONTROLLER/controller_clientes')
const telefones = require('./CONTROLLER/controller_telefones')
const carros = require('./CONTROLLER/controller_carros')

router.post('/clientes', clientes.create)
router.get('/clientes', clientes.read)
router.put('/clientes/:id', clientes.update)
router.delete('/clientes/:id', clientes.deletar)

router.post('/telefones', telefones.create)
router.get('/telefones', telefones.read)
router.put('/telefones/:id', telefones.update)
router.delete('/telefones/:id', telefones.deletar)

router.post('/carros', carros.create)
router.get('/carros', carros.read)
router.put('/carros/:id', carros.update)
router.delete('/carros/:id', carros.deletar)

module.exports = router;