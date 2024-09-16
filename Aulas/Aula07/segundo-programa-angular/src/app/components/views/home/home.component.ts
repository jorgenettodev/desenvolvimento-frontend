import { Component } from '@angular/core';
import { Produto } from '../../../models/produto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public produtos: Array<Produto> = new Array<Produto>();

  constructor() {
    this.produtos.push(new Produto("Bolu de murangu", 500000))
    this.produtos.push(new Produto("Bolo de chocolate", 150))
    this.produtos.push(new Produto("Bolo de Cenoura", 200))
    this.produtos.push(new Produto("Bolo de Milho", 300))

    // console.table(this.produtos)

    let container = document.querySelector("#container");
  }

}
