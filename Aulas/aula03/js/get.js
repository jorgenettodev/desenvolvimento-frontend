// faz o fetch e passa o headers informando que vai trafegar json
fetch('http://localhost:5010/', {
    'method': 'GET',
    'headers': {
        'Content-type': 'application/json'
    }
}).then(resposta => {
    if (!resposta.ok) {
         throw new Error("deu ruim no get")
    }
    return resposta.json();
}).then(dados => {
    console.log(dados);
})
// se não retornar um ok, joga um erro.
// se ok, transforma a RESPOSTA em json
// pega a resposta => joga no console.log