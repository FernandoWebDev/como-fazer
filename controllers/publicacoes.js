const api = require('../api')

const listar = async(req, res) => {
    const publicacoes = await api.list('publicacoes')
    res.render('publicacoes/index', {publicacoes : publicacoes })
}

const novoForm = (req, res) => {
    res.render('publicacoes/nova')
}

const novaPublicacao = async(req, res) => {
    await api.create('publicacoes', req.body.publicacoes)
    res.redirect('/publicacoes')
}

const editarForm = async(req, res) => {
    const publicacao = await api.get('publicacoes', req.params.id)    
    res.render('publicacoes/editar', {
        publicacao
    })
}

const editarPublicacao = async(req, res) => {    
    await api.update('categorias', req.params.id, {
        publicacao: req.body.publicacao
    })
    res.redirect('/publicacoes')
}

const excluirPublicacao = async(req, res) => {
    await api.apagar('categorias', req.params.id)
    res.redirect('/categoria')
}

module.exports = {
    listar, 
    novoForm,
    novaPublicacao,
    editarForm,
    editarPublicacao,
    excluirPublicacao
}