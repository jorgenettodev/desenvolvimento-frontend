// passos
// 1 - importa o express e inicializa o aplicativo express
const express = require('express');
const app = express();
const port = 6001;



let jogos = [
    { nome: "Minecraft", valor: 10, descricao: "Joguinho de blocos pra se divertir com a galerinha", imagem: "https://placehold.co/150" },
    { nome: "Terraria", valor: 15, descricao: "Explore, construa e lute em um mundo 2D cheio de aventuras", imagem: "https://placehold.co/150" },
    { nome: "Subnautica", valor: 25, descricao: "Sobreviva nas profundezas de um oceano alienígena", imagem: "https://placehold.co/150" },
    { nome: "Don't Starve", valor: 20, descricao: "Sobreviva em um mundo sombrio e misterioso", imagem: "https://placehold.co/150" },
    { nome: "Rust", valor: 30, descricao: "Sobreviva na natureza selvagem e lute contra outros jogadores", imagem: "https://placehold.co/150" },
    { nome: "The Forest", valor: 22, descricao: "Sobreviva em uma ilha habitada por canibais mutantes", imagem: "https://placehold.co/150" },
    { nome: "ARK: Survival Evolved", valor: 35, descricao: "Sobreviva em um mundo cheio de dinossauros e criaturas pré-históricas", imagem: "https://placehold.co/150" },
    { nome: "Valheim", valor: 28, descricao: "Explore um mundo viking gerado proceduralmente", imagem: "https://placehold.co/150" },
    { nome: "Raft", valor: 18, descricao: "Sobreviva no oceano construindo sua própria jangada", imagem: "https://placehold.co/150" },
    { nome: "7 Days to Die", valor: 24, descricao: "Sobreviva a um apocalipse zumbi em um mundo aberto", imagem: "https://placehold.co/150" }
]

app.get("/", (req, res) => {
    res.json(jogos);
    console.log("entrou na rota '/'.");
    
})

let buscarJogo = (jogoBuscado) => {

    for (const jogo of jogos) {
        if (jogoBuscado.toLowerCase() == jogo.nome.toLocaleLowerCase()) {
            return jogo;
        } 
    }

    // se nao achar o jogo buscado, retorna um game padrão.
    return jogos[0];
}


app.get("/produto", (req, res) => {
    let query = req.query;
    let jogoBuscado = query.nome;

    res.json(buscarJogo(jogoBuscado));

})

// 3 - starta o server e loga uma mensagem pra dizer que o server tá rodando na porta tal.
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
