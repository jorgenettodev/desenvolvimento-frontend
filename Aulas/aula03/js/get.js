fetch('http://localhost:5010', {
    method: 'GET',
    headers: {
        'Content-type': 'application/json'
    }
}).then(resposta => resposta.json())
    .then(dados => console.log(dados));