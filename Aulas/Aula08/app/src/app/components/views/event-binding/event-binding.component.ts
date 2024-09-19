import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  // texto do botão usado pelo componente
  public textoBtn: string = "Login nesse site bonitão";

  // ação para evento de click
  public clicou(): void {
    console.log('clicou no botao azul');
  }

  public srcImg: string = "https://via.placeholder.com/500";
  public enviarEmail(): void {
    alert('Your email was sent successfully');
  }

  public logaConteudoInput(event: Event): void {
    console.log((event.target as HTMLInputElement).value);
  }
}
