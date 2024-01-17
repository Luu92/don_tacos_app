import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  tacosTradicionales: MenuRestaurant[] = [
    {
      nombre: 'Taco al Pastor',
      descripcion:
        'Taco de Carne de Cerdo marinada en adobo especial de la casa.',
      precio: 14.0,
      urlImg: '../../../assets/img/taco_pastor.jpg',
    },
    {
      nombre: 'Taco de Suadero',
      descripcion: 'Taco Carne de Res en tortilla de maíz',
      precio: 14.0,
      urlImg: '../../../assets/img/taco_suadero.jpg',
    },
    {
      nombre: 'Taco Campechano',
      descripcion: 'Taco de 2 Carnes al gusto',
      precio: 14.0,
      urlImg: '../../../assets/img/taco_campechano.jpg',
    },
    {
      nombre: 'Taco Tripa',
      descripcion: 'Taco de tripa de Res.',
      precio: 16.0,
      urlImg: '../../../assets/img/taco_tripa.jpg',
    },
    {
      nombre: 'Taco Longaniza',
      descripcion: 'Taco de Carne de Cerdo en adobo con especias.',
      precio: 14.0,
      urlImg: '../../../assets/img/taco_longaniza.jpg',
    },
  ];

  tacosEspeciales: MenuRestaurant[] = [
    {nombre: 'Pastor con Queso y Harina', descripcion: 'Taco al Pastor, piña, quesillo y tortilla de harina', precio: 35, urlImg: '../../../assets/img/pastor_quesillo.jpg'},
  ];

  tortas: MenuRestaurant[] = [
    {nombre: 'Torta al Pastor', descripcion: 'Carne al Pastor, piña, quesillo y pan', precio: 65, urlImg: '../../../assets/img/torta_pastor.jpg'},

  ];

  alambres: MenuRestaurant[] = [
    {nombre: 'Alambre al Pastor', descripcion: 'Carne al Pastor, Morron, Cebolla, piña y quesillo', precio: 130, urlImg: '../../../assets/img/alambre_pastor.jpg'},
    {nombre: 'Alambre de Suadero', descripcion: 'Carne de res, Morron, Cebolla y quesillo', precio: 130, urlImg: '../../../assets/img/alambre_pastor.jpg'},

  ];

}

interface MenuRestaurant {
  nombre: String;
  descripcion: String;
  precio: Number;
  urlImg: String;
}
