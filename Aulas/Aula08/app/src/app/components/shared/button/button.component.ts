import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() public texto!: string;
  @Input() public cor!: string;
  // @Input() public largura!: string;

}
