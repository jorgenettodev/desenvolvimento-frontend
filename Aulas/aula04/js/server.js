// libs
const express = require('express');
const mongoose = require('mongoose');

const app = express()
const port = 8050;

// adiciona a string de conexao com o banco de dados
const connectionString = "mongodb+srv://jorgenetto96:8ZpcDeDkzMd63bXp@bancodedados.2g3xn.mongodb.net/";

// importa o usuario
const Usuario = require("./models/usuario");

// ENDPOINT GET
app.get('/', async (req, res) => {
    let usuarios = await Usuario.find();
    
    try {
        return res.status(200).json({ users: usuarios });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Erro interno no servidor" });
    }
});

// instala o middleware
app.use(express.json());

// ENDPOINT cadastro usuario
app.post("/cadastrar-usuario", async (req, res) => {
    try {
        let usuario = {
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha
        }
        
        await Usuario.create(usuario);

        return res.status(201).json({mensagem: "Usuario cadastrado com sucesso!!" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Erro interno no servidor"})
    }
});

// ENDPOINT LOGIN
app.post("/login", async (req, res) => {
    try {
        // tenta achar o usuario no banco com base no req.email
        let usuario = await Usuario.findOne({email: req.body.email});

        // se nulo, retorna erro
        if (usuario === null) {
            return res.status(404).json({message: "Usuario ou senha invalidos."});

        }
        
        console.log(usuario);
        // se sucesso, retorna success e gera um token aleatorio.
        return res.status(200).json({message: "Login Success", token: Math.floor(Math.random() * 10000000)});
    }

    catch (error) {
        console.log(error);
        return res.status(500).json({message: "Erro interno no servidor"})
    }

});

// conecta com o mongoose (passa aquela string como parametro)
// isto retorna uma promise, então se der certo usa o THEN, se der errado, CATCH
mongoose.connect(connectionString, {
    dbName: "BancoDeDados"
}).then(() => {
    console.log("MongoDB UP!")
    console.log(`Server running on http://localhost:${port}`) // coloca o app.listen pra dentro do then,
    app.listen(port)                                          //  pois aqui o mongodb tá rodando legal.
}).catch((error) => {
    console.log("Falha ao se conectar com o mongodb");
    console.log(error);
})

// 
