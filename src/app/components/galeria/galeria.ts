import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-galeria',
  templateUrl: './galeria.html',
})
export class Galeria {
  public readonly obrasGaleria = [
    { titulo: 'Obra 01', imagem: '/img/pintura-1-fundo-preenchido.jpeg' },
    { titulo: 'Obra 02', imagem: '/img/imagem-2-fundo-preenchido.jpeg' },
    { titulo: 'Obra 03', imagem: '/img/imagem-3-fundo-preenchido.jpeg' },
    { titulo: 'Obra 04', imagem: '/img/imagem-4-fundo-preenchido.jpeg' },
    { titulo: 'Obra 05', imagem: '/img/imagem-5-fundo-preenchido.jpeg' },
    { titulo: 'Obra 06', imagem: '/img/imagem-6-fundo-preenchido.jpeg' },
    { titulo: 'Obra 07', imagem: '/img/imagem7-fundo-preenchido.jpeg' },
    { titulo: 'Obra 08', imagem: '/img/imagem-8-fundo-preenchido.jpeg' },
    { titulo: 'Obra 09', imagem: '/img/imagem-9-fundo-preenchido.jpeg' },
    { titulo: 'Obra 10', imagem: '/img/imagem-10-fundo-preenchido.jpeg' },
    { titulo: 'Obra 11', imagem: '/img/imagem-12-fundo-preenchido.jpeg' },
  ];
}
