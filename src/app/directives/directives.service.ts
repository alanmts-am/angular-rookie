import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DirectivesService {

  constructor() { }

  getCursos(): string[] {
    return ['Alan', 'Mikaella', 'Keeteleen']
  }
}
