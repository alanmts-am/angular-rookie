import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  pessoa: any = {
    nome: "Alan Mateus",
    idade: 26,
    peso: 81.76234,
    dataNasc: new Date(1998, 2, 20),
    renda: 2100
  }
}
