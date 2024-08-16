const express = require('express');
const app = express();
const port = 5010;

// middleware para receber json.
app.use(express.json());

// cria database vazia;
let database = [];

// cadastra novos usuarios
    // verificações: email já criado, senhas diferentes.
app.post("/cadastrar-usuario", (req, res) => {
    try {
        let usuario = {
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            confirmacaoSenha: req.body.confirmacaoSenha
        }

        // let usuarioJaExiste = database.find(usuarioProcurado => usuarioProcurado.email == usuario.email);
        let usuarioJaExiste = database.find(usuarioProcurado => usuarioProcurado.email === usuario.email);

        // se o email já existe na db, retorna.
        if (usuarioJaExiste) {
            return res.status(400).send("Este email já está sendo utilizado.");
        }

        // se as senhas não forem iguais, retorna erro.
        if (!(usuario.senha === usuario.confirmacaoSenha)) {
            return res.status(400).send("As senhas devem ser iguais.")
        }

        // adiciona no database
        database.push(usuario);

        return res.status(201).send("cadastro realizado com sucesso.");
    } catch (error) {
        return res.status(500).json({mensagem: error});
    }
})


app.get("/buscar-todos-usuarios", (req, res) => {
    try {
        return res.status(200).json(database)
    } catch (error) {
        return res.status(500).json({mensagem: "Erro ao buscar usuarios."})
    };
});


// /login (GET)
app.post("/login", (req, res) => {
    let msgErro = "Usuário ou senha inválidos.";
    let msgSucesso = "Login bem sucedido."
    
    // verifica se email já existe no database, se sim, verifica se a senha do usuarioLogado é igual ao usuarioListado
    let inputLogin = {
        email: req.body.email,
        senha: req.body.senha
    }

    let emailEncontrado = database.find(usuarioNaLista => inputLogin.email == usuarioNaLista.email);

    if (!emailEncontrado) {
        return res.status(500).send(msgErro);
    }

    // se a senha não for a mesma do emailEncontrado, retorna um erro
    if (!(emailEncontrado.senha == inputLogin.senha)) {
        return res.status(500).send(msgErro);
    }

    return res.status(200).send(msgSucesso);

});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})