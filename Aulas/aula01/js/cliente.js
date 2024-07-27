const conteudoDiv = document.querySelector("#conteudo");

fetch("http://localhost:5001", {
  methods: "GET"
})
  .then((res) => res.json())
  .then((produtos) => {
    for (const produto of produtos) {
      // console.log(dados[bolo].nome)
      // const nomeDoBolo = dado.nome;
      const paragrafo = document.createElement("p");
      paragrafo.innerText = `Nome do bolo: ${produto.nome} | Valor: ${produto.valor}`;

      conteudoDiv.appendChild(paragrafo);
    }
  });

// obj: renderizar o conteudo na tela

// input
// conteudo q veio do fetch

// processing
// transforma o conteudo em um paragrafo html
// faz um append na div('conteudo')

// output
// faz um append dos paragrafos na div conteudo e mostra na tela
