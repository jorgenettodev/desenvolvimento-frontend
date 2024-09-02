class Pessoa {
    private _nome; string;
    private _idade: number;

    constructor(nome, idade: number) {
        this._nome = nome;
        this._idade = idade;
    }

    public get idade() {
        return this._idade;
    }

    public set idade(idade: number) {
        this._idade = idade;
    }

    public get nome() {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    // metodo que retorna um number
    public calculaIdade(anoDeNascimento: number, anoAtual: number): number {
        let idade = anoAtual - anoDeNascimento;
        return idade;
    }

}

let pessoa = new Pessoa("Netto", 27);
let idadePessoa = pessoa.calculaIdade(1996, 2024);
pessoa.nome = "Nettinho";

console.log(pessoa.nome);