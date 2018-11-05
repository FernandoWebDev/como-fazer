const express = require('express')
const router = express.Router()

const controller = require('../controllers/categorias')

router.get('/', controller.listar)

router.get('/nova', controller.novoForm)

router.post('/nova', controller.novaCategoria)

router.get('/editar/:id', controller.editarForm)

router.post('/editar/:id', controller.editarCategoria)

router.get('/excluir/:id', controller.excluirCategoria)

module.exports = router