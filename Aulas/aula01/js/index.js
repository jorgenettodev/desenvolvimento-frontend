const http = require('http');
const port = 5001;

const produtos = [
    {nome: 'Bolo de murangu', valor: 1_000_000}, 
    { nome: 'bolo de chocolate', valor: 300 },
];

const requestHandler = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.write(JSON.stringify(produtos))
    return res.end()
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
    console.log("Servidor rodando na porta 5001");
})