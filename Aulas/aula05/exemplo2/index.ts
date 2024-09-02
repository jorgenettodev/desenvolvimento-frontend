class Pessoa {
    private nome: string;
    private idade: number

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    public imprimeNome(): void {
        console.log("Ola, meu nome eh: " + this.nome);
    }
}

let pessoa = new Pessoa("Nettinho", 27);

pessoa.imprimeNome();