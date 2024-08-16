const express = require('express');
const app = express();
const port = 5010;

// middleware para receber json.
app.use(express.json());

// cria database vazia;
let database = [{
    "email": "bruno@email.com",
    "senha": "1234a",
    "confirmacaoSenha": "1234a",
    "nome": "Brunno Vasco"
}];

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

        let usuarioJaExiste = database.find(usuarioProcurado => usuarioProcurado.email == usuario.email);

        // se o email já existe na db, retorna.
        if (usuarioJaExiste) {
            return res.send("Este email já está sendo utilizado.");
        }

        // se as senhas não forem iguais, retorna erro.
        if (!(usuario.senha == usuario.confirmacaoSenha)) {
            return res.send("As senhas devem ser iguais.")
        }

        // adiciona no database
        database.push(usuario);

        return res.status(201).send("cadastro realizado com sucesso.");
    } catch (error) {
        return res.status(500).json({mensagem: error});
    }
})


app.get("/buscar-todos-usuarios", (req, res) => {
    return res.status(200).json(database);
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
        return res.send(msgErro);
    }

    // se a senha não for a mesma do emailEncontrado, retorna um erro
    if (!(emailEncontrado.senha == inputLogin.senha)) {
        return res.send(msgErro);
    }

    return res.status(200).send(msgSucesso);

});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})