import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalConexionService {
  modal!: boolean;

  constructor() { }

  showModal() {
    this.modal = true;
  }

  hideModal() {
    this.modal = false;
  }
}
