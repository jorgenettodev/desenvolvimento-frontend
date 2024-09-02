class Pessoa2{
    _nome;
    _idade;

    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }

    dizerOla() {
        console.log(`Olá, meu nome é ${this._nome}`);
    }

    getNome() {
        return this._nome;
    }

}

let pessoa = new Pessoa("Netto", 27);
pessoa.nome = "Fulano"
pessoa.dizerOla();