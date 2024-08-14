const express = require('express');
const app = express();
const port = 5010;
// MIDDLEWARE para interpretar o corpo da requição JSON
app.use(express.json());

// crie uma database e retorne ele na rota "/";

// let database = [];

app.get("/",(requisicao, resposta) => {
    try {
        return resposta.status(200).json({ produtos: database });
    } catch (error) {
        return resposta.status(500).json({ mensagem: error.message })
    }
})




// ENDPOINT
// metodo post para adicionar produto
app.post("/adicionar-produto", (req, res) => {

    try {
        let produto = {
            nome: req.body.nome,
            valor: req.body.valor
        }
        database.push(produto);

        return res.status(201).json({ mensagem: "Produto adicionado com sucesso!" });
    } catch (error) {
        return res.status(500).json({ mensagem: error });
    }
});

// inicializa o server
app.listen(port, () => {
    console.log("Servidor executando!")
    console.log(`http://localhost:${port}`);
});