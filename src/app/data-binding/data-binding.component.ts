import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  texto: string = "Esse texto está vindo do TS por interpolação";

  urlImage: string = "http://lorempixel.com.br/500/400/?1"

  texto_digitado!: string;
  texto_salvo!: string;
  texto_armazenado: string = "Texto setado no componente"

  nomeIo = "Esse texto está no home mas sendo levado até o io-properties"
  valorRecebido!: number;

  constructor() {
  }

  getTexto(): string {
    return "Texto vindo de um método"
  }

  botaoClicado() {
    window.alert("Botão clicado")
  }

  getValue(evento: KeyboardEvent) {
    this.texto_digitado = (<HTMLInputElement>evento.target).value
  }

  setValue(evento: Event) {
    this.texto_salvo = (<HTMLInputElement>evento.target).value
  }
}
