// passos
    // passo 1 - require o express 
    // passo 2 - define rotas
    // passo 3 - inicializa o servidor


// passo 1
const express = require("express");
const app = express();
const porta = 6001;

// passo 2
app.get("/", (req, res) => {
    res.send("Hello world");
})

app.listen(porta);