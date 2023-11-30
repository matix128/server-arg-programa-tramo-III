const { Schema, model } = require('mongoose');

const ComentarioSchema = new Schema({
    descripcion: String,
    autor: {
        type: Schema.Types.ObjectId,
        ref: 'usuario',
    },
    posteo: {
        type: Schema.Types.ObjectId,
        ref: 'posteo',
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
ComentarioSchema.pre('save', function (next) {
    if (!this.createdAt) {
        this.createdAt = new Date();
    }
    next();
});
const ComentarioModel = model('comentario', ComentarioSchema);

module.exports = ComentarioModel;
