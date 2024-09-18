import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showLoader: boolean = false;
  images = ['https://media1.tenor.com/m/KEzW7ALwfUAAAAAC/cat-what.gif', 'https://i.redd.it/z3wtqb3vga2c1.jpg', 'https://s30385.pcdn.co/wp-content/uploads/2023/11/bigstock-Cute-British-Cat-Giving-High-F-342870922.jpeg.webp'];
  texts = ['Cargando...', 'Procesando...', 'Finalizando...'];

  constructor(private router: Router) { }

  startLoader() {
    this.showLoader = true;

    // Simular la llamada a una API con setTimeout
    setTimeout(() => {
      this.showLoader = false;
      this.router.navigate(['/nueva-ruta']);  // Redirigir a otra ruta
    }, 5000);  // Simulación de 5 segundos
  }

}
