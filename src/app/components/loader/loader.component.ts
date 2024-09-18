import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Importa Router

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() images: string[] = [];  // Lista de imágenes
  @Input() texts: string[] = [];   // Lista de textos
  @Input() intervalTime: number = 3000; // Tiempo configurable en milisegundos
  currentIndex: number = 0;

  constructor(private router: Router) { }  // Inyecta el Router

  ngOnInit() {
    this.startImageRotation();
  }

  // Método para iniciar la rotación de las imágenes y textos
  startImageRotation() {
    const rotationInterval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, this.intervalTime);

    // Redirigir después de todas las rotaciones (número de imágenes * tiempo de cada rotación)
    setTimeout(() => {
      clearInterval(rotationInterval);  // Detener la rotación
      this.router.navigate(['/back']);  // Redirigir a /back
    }, this.images.length * this.intervalTime);  // Tiempo total de rotaciones

  }
}
