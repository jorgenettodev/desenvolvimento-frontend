const express = require('express');
const app = express();
const port = 5010;
// MIDDLEWARE para interpretar o corpo da requição JSON
app.use(express.json());

// crie uma database e retorne ele na rota "/";

let database = [];

app.get("/",(requisicao, resposta) => {
    try {
        return resposta.status(200).json({ produtos: database });
    } catch (error) {
        return resposta.status(500).json({ mensagem: error.message })
    }
})

// crie uma rota que busca um produto por id. Input: ?id='' || processing: use array.find para percorrer a database e retornar o produto com o id buscado
app.get("/buscar-produto-por-id", (req, res) => {
    try {

        // loga o id buscado
        let produtoId = req.query.id;
        console.log(produtoId);

        // busca o produto e salva numa variavel
        let produto = database.find(produto => produto.id == produtoId);
        console.log(produto.nome);

        
        return res.status(200).json({mensagem: produto});
    } catch (error) {
        return res.status(500).json({mensagem: "deu ruim"});
    }
})


// ENDPOINT
// metodo post para adicionar produto
app.post("/adicionar-produto", (req, res) => {

    try {
        let produto = {
            nome: req.body.nome,
            valor: req.body.valor,
            descricao: req.body.descricao,
            id: req.body.id
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