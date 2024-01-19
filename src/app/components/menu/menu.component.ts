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
        'Taco de Carne de cerdo marinada en adobo especial de la casa.',
      precio: 14.0,
      urlImg: '../../../assets/img/taco_pastor.jpg',
    },
    {
      nombre: 'Taco de Suadero',
      descripcion: 'Carne de Res en tortilla de maíz',
      precio: 14.0,
      urlImg: '../../../assets/img/taco_suadero.jpg',
    },
    {
      nombre: 'Taco Campechano',
      descripcion: 'Dos carnes al gusto en tortilla de maíz',
      precio: 14.0,
      urlImg: '../../../assets/img/taco_campechano.jpg',
    },
    {
      nombre: 'Taco Tripa',
      descripcion: 'Tripa de Res en tortilla de maíz',
      precio: 16.0,
      urlImg: '../../../assets/img/taco_tripa.jpg',
    },
    {
      nombre: 'Taco Longaniza',
      descripcion: 'Carne de Res en tortilla de maíz',
      precio: 14.0,
      urlImg: '../../../assets/img/taco_longaniza.jpg',
    },
  ];

  tacosEspeciales: MenuRestaurant[] = [
    {nombre: 'Volcanes', descripcion: 'Carne al Gusto, quesillo y tortilla dorada', precio: 65, urlImg: '../../../assets/img/volcan.jpeg'},
    {nombre: 'Taco al Pastor en tortilla de harina', descripcion: 'Carne al Pastor, piña, quesillo y tortilla de harina', precio: 35, urlImg: '../../../assets/img/pastor_quesillo.jpg'},
    {nombre: 'Taco de Suadero en tortilla de harina', descripcion: 'Carne de Suadero, quesillo y tortilla de harina', precio: 35, urlImg: '../../../assets/img/suadero_quesillo.jpeg'},
    {nombre: 'Taco de Arrachera en tortilla de harina', descripcion: 'Carne de Arrachera, quesillo y tortilla de harina', precio: 45, urlImg: '../../../assets/img/arrachera_quesillo.jpeg'},
    {nombre: 'Taco de Bistec en tortilla de harina', descripcion: 'Carne de Res, quesillo y tortilla de harina', precio: 45, urlImg: '../../../assets/img/bistec_quesillo.jpeg'},
    {nombre: 'Taco de Costilla en tortilla de harina', descripcion: 'Carne de Res, quesillo y tortilla de harina', precio: 45, urlImg: '../../../assets/img/costilla_quesillo.jpeg'},
  ];

  tortas: MenuRestaurant[] = [
    {nombre: 'Torta al Pastor', descripcion: 'Carne al Pastor, piña, quesillo y telera con ajonjolí', precio: 65, urlImg: '../../../assets/img/torta_pastor.jpg'},
    {nombre: 'Torta de Suadero', descripcion: 'Carne de Res, quesillo y telera con ajonjolí', precio: 65, urlImg: '../../../assets/img/torta_suadero.jpeg'},
    {nombre: 'Torta Campechana', descripcion: 'Dos Carnes al Gusto, quesillo y telera con ajonjolí', precio: 75, urlImg: '../../../assets/img/torta_campechana.jpeg'},
    {nombre: 'Torta de Bistec', descripcion: 'Carne de Res, quesillo y telera con ajonjolí', precio: 75, urlImg: '../../../assets/img/torta_bistec.jpeg'},
    {nombre: 'Torta de Longaniza', descripcion: 'Longaniza, quesillo y telera con ajonjolí', precio: 65, urlImg: '../../../assets/img/torta_longaniza.jpeg'},

  ];

  alambres: MenuRestaurant[] = [
    {nombre: 'Alambre al Pastor', descripcion: 'Carne al Pastor, Morron, Cebolla, piña y quesillo', precio: 130, urlImg: '../../../assets/img/alambre_pastor.jpg'},
    {nombre: 'Alambre de Suadero', descripcion: 'Carne de res, Morron, Cebolla y quesillo', precio: 130, urlImg: '../../../assets/img/alambre_bistec.jpeg'},
    {nombre: 'Alambre de Campechano', descripcion: 'Dos carnes al gusto, Morron, Cebolla y quesillo', precio: 145, urlImg: '../../../assets/img/alambre_pastor.jpg'},
    {nombre: 'Alambre de Bistec', descripcion: 'Carne de Res, Morron, Cebolla y quesillo', precio: 145, urlImg: '../../../assets/img/alambre_bistec.jpeg'},

  ];

}

interface MenuRestaurant {
  nombre: String;
  descripcion: String;
  precio: Number;
  urlImg: String;
}
