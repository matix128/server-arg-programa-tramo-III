const comentarioRouter = require('express').Router();

const {
    listarComentariosDePosteo,
    crearComentario,
    modificarComentario,
    eliminarComentario,
} = require('./../controllers/mongoose/ComentarioController.js');

comentarioRouter.get('/comentarios/:idPosteo', listarComentariosDePosteo);

comentarioRouter.post('/comentarios', crearComentario);

comentarioRouter.put('/comentarios/:idComentario', modificarComentario);
comentarioRouter.delete('/comentarios/:idComentario', eliminarComentario);
module.exports = comentarioRouter;


