for (let i = 0; i < 3; i++) {
    fetch('http://localhost:5010/adicionar-produto', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            id: i,
            nome: "bolu de murangu",
            valor: 15000,
            descricao: "hummmm bolu de murangu"
        })
    })
    .then(resposta => resposta.json())
    .then(dados => console.log(dados))
    .catch(error => {
        console.log(error)
    })
    
}