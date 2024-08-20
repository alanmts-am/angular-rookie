import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DirectivesService {

  getCursos(): string[] {
    return ['Alan', 'Mikaella', 'Keeteleen']
  }
}
