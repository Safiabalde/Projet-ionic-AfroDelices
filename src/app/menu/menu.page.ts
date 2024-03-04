import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

// Importez les styles de Swiper


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements AfterViewInit {

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 3, // Nombre de slides visibles à la fois
      spaceBetween: 20, // Espacement entre les slides
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
