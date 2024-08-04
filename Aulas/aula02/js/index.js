const express = require('express');
const app = express();
const porta = 6001;

// cria banco de dados fake

let produtos = [
    {
        nome: "Bolu de murangu",
        valor: 10000,
        descricao: "Hummmmm melhor bolo do mundo",
        img: "https://placehold.co/150"
    },
    {
        nome: "Bolu de Chocolate",
        valor: 200,
        descricao: "bolo de chocolate",
        img: "https://placehold.co/150"
    },
    {
        nome: "Bolu de cenoura",
        valor: 300,
        descricao: "hummm muito bom",
        img: "https://placehold.co/150",
    }
]


app.get('/', (requisicao, resposta) => {
    try {
        return resposta.json(produtos).status(200)
    } catch (error) {
        return resposta.json({message: "Operacao invalida"}).status(400)
    }
})

app.get('/musica', (req, res) => {
    return res.send({
        nomeDaMusica: "Send my love",
        artist: "Adele",
        link: "https://www.youtube.com/watch?v=mShhzNjXmq0&ab_channel=J%C3%BAliaCaroline",
    })
})

app.get('/jogos', (req, res) => {
    let queryUrl = req.query;
    console.log(queryUrl);

    return res.json("Deu certo").status(200);
});



app.listen(porta, () => {
    console.log(`http://localhost:${porta}`)
});

