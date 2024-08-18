import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getCursos(): string[] {
    return ['Alan', 'Mikaella', 'Keeteleen']
  }
}
