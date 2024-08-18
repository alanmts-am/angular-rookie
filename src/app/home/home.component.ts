import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  texto: string = "Esse texto está vindo do TS por interpolação";
  pessoas!: string[];

  urlImage: string = "http://lorempixel.com.br/500/400/?1"

  texto_digitado!: string;
  texto_salvo!: string;
  texto_armazenado: string = "Texto setado no componente"

  nomeIo = "Esse texto está no home mas sendo levado até o io-properties"
  valorRecebido!: number;

  constructor(private homeService: HomeService) {
    this.pessoas = this.homeService.getCursos();
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

  onMudouValor(evento: any) {
    this.valorRecebido = evento.novoValor
  }
}
