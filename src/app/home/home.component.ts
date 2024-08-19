import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  nomeIo = "Esse texto está no home mas sendo levado até o io-properties"
  valorRecebido!: number;

  nav = 'home';

  onMudouValor(evento: any) {
    this.valorRecebido = evento.novoValor
  }
}
