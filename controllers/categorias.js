const api = require('../api')

const listar = async(req, res) => {
    const categorias = await api.list('categorias')
    res.render('categoria/index', {categorias : categorias })
}

const novoForm = (req, res) => {
    res.render('categoria/nova')
}

const novaCategoria = async(req, res) => {
    await api.create('categorias', req.body.categoria)
    res.redirect('/categoria')
}

const editarForm = async(req, res) => {
    const categoria = await api.get('categorias', req.params.id)    
    res.render('categoria/editar', {
        categoria
    })
}

const editarCategoria = async(req, res) => {    
    await api.update('categorias', req.params.id, {
        categoria: req.body.categoria
    })
    res.redirect('/categoria')
}

const excluirCategoria = async(req, res) => {
    await api.apagar('categorias', req.params.id)
    res.redirect('/categoria')
}

module.exports = {
    listar, 
    novoForm,
    novaCategoria,
    editarForm,
    editarCategoria,
    excluirCategoria
}