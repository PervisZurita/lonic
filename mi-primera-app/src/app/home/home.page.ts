import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  mostrarMensaje() {
    alert('¡Hola! Has hecho clic en el botón.');
  }

}
