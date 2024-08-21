// import libs
const mongoose = require("mongoose");

// cria schema/modelo para um usuario
const usuarioSchema = mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true }
});

const usuario = mongoose.model('usuarios', usuarioSchema);
module.exports = usuario;