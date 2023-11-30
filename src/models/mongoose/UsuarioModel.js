const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
    usuario: String,
    contrasenia: String,
    email: String,
    UURL: String,
});

const UsuarioModel = model('usuario', UsuarioSchema);

module.exports = UsuarioModel;
