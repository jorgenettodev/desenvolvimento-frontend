// passo a passo
    // 1- CONFIGURAR O AMBIENTE
        // 1.1 - instalar o express e inicializar o express
        // npm install express + npm init -y

    // 2 - criar o servidor express e configurar rotas

    // inicializa o servidor express

// 2 - criar o servidor
const express = require('express');
const app = express();
const port = 6002;

// 3 - cria banco de dados fake
const cursos = [
    {
        nome: "React",
        tipo: "Frontend",
        valor: 30,
        descricao: "Library usada para desenvolvimento de sites com componentes reutilizaveis"
    },
    {
        nome: "Angular + Spring Boot",
        tipo: "Fullstack",
        valor: 30,
        descricao: "Curso fullstack para vc lançar aplicações de ponta a ponta"
    },
    {
        nome: "Vue.js",
        tipo: "Frontend",
        valor: 25,
        descricao: "Framework progressivo para construção de interfaces de usuário"
    },
    {
        nome: "Node.js",
        tipo: "Backend",
        valor: 35,
        descricao: "Ambiente de execução JavaScript server-side para aplicações escaláveis"
    },
    {
        nome: "Python + Django",
        tipo: "Fullstack",
        valor: 40,
        descricao: "Desenvolvimento web completo com Python e o framework Django"
    },
    {
        nome: "JavaScript Avançado",
        tipo: "Frontend",
        valor: 45,
        descricao: "Aprofunde seus conhecimentos em JavaScript com técnicas avançadas"
    },
    {
        nome: "Ruby on Rails",
        tipo: "Fullstack",
        valor: 35,
        descricao: "Framework web para desenvolvimento rápido e eficiente"
    },
    {
        nome: "GraphQL",
        tipo: "Backend",
        valor: 30,
        descricao: "API query language para otimizar a comunicação cliente-servidor"
    },
    {
        nome: "React Native",
        tipo: "Mobile",
        valor: 50,
        descricao: "Desenvolvimento de aplicativos móveis multiplataforma com React"
    },
    {
        nome: "DevOps com Docker e Kubernetes",
        tipo: "Infraestrutura",
        valor: 55,
        descricao: "Aprenda a implantar e gerenciar aplicações em containers"
    }
]

// 3.1 - cria funcao que procura um curso na lista e o retorna
const procurarCurso = (nomeCurso) => {
    
    // percorre a lista de cursos
    for (const curso of cursos) {
        if (curso.nome.toLowerCase().includes(nomeCurso.toLowerCase())) {
            return curso;
        }
    }

    return null;
}

// 4 - cria rotas
app.get("/", (req, res) => {
    console.log("entrou na porta '/'");
    res.send("hello world");
});

// retorna o nome dos cursos
app.get("/cursos", (req, res) => {
    console.log("entrou na rota 'cursos'.")
    let queryString = req.query;
    if (req.query.length === 0) {
        res.send('nenhum parametro passado')
    } else {
        res.json(req.query[0])
    }
    // let encontrouCurso = procurarCurso(queryString.nome);
    // res.json(encontrouCurso);
})

// 5 - inicializa o servidor
app.listen(port, () => {
    console.log(`Listening on port: http://localhost:${port}`);
})

