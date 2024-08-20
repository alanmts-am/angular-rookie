import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-io-properties',
  templateUrl: './io-properties.component.html',
  styleUrl: './io-properties.component.scss'
})
export class IoPropertiesComponent {
  @Input() nome!: string;
  contador = 0;

  @Output() mudouValor = new EventEmitter();

  plus() {
    this.contador++
    this.mudouValor.emit({ novoValor: this.contador })
  }

  minus() {
    this.contador--
    this.mudouValor.emit({ novoValor: this.contador })
  }
}
