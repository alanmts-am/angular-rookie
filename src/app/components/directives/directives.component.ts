import { Component } from '@angular/core';
import { DirectivesService } from '../../services/directives.service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  pessoas!: string[];
  isCursosListados = false;

  input = 0
  isFavorite = false;

  constructor(private directivesService: DirectivesService) {
    this.pessoas = this.directivesService.getCursos();
  }

  trocar() {
    this.isCursosListados = !this.isCursosListados;
  }

  mudarInput() {
    this.input++
  }

  mudaImg() {
    this.isFavorite = !this.isFavorite
  }

}
