import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ObraSelecionada } from '../sessao-de-compra/sessao-de-compra';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-galeria',
  templateUrl: './galeria.html',
})
export class Galeria {
  @Input() obrasNoCarrinho: ObraSelecionada[] = [];
  @Output() adicionarAoCarrinho = new EventEmitter<ObraSelecionada>();

  estaNoCarrinho(obra: ObraSelecionada): boolean {
    return this.obrasNoCarrinho.some((item) => item.imagem === obra.imagem);
  }

  public readonly obrasGaleria = [
    {
      titulo: 'Obra 01',
      imagem: '/img/pintura-1-fundo-preenchido.jpeg',
      categoria: 'Desenho em folha A4',
      preco: 39.9,
    },
    {
      titulo: 'Obra 02',
      imagem: '/img/imagem-2-fundo-preenchido.jpeg',
      categoria: 'Tela grande',
      preco: 110,
    },
    {
      titulo: 'Obra 03',
      imagem: '/img/imagem-3-fundo-preenchido.jpeg',
      categoria: 'Desenho em folha A4',
      preco: 39.9,
    },
    {
      titulo: 'Obra 04',
      imagem: '/img/imagem-4-fundo-preenchido.jpeg',
      categoria: 'Desenho em folha A4',
      preco: 39.9,
    },
    {
      titulo: 'Obra 05',
      imagem: '/img/imagem-5-fundo-preenchido.jpeg',
      categoria: 'Tela pequena',
      preco: 45,
    },
    {
      titulo: 'Obra 06',
      imagem: '/img/imagem-6-fundo-preenchido.jpeg',
      categoria: 'Desenho em folha A4',
      preco: 39.9,
    },
    {
      titulo: 'Obra 07',
      imagem: '/img/imagem7-fundo-preenchido.jpeg',
      categoria: 'Mandala',
      preco: 50,
    },
    {
      titulo: 'Obra 08',
      imagem: '/img/imagem-8-fundo-preenchido.jpeg',
      categoria: 'Mandala',
      preco: 50,
    },
    {
      titulo: 'Obra 09',
      imagem: '/img/imagem-9-fundo-preenchido.jpeg',
      categoria: 'Arte em madeira',
      preco: 50,
    },
    {
      titulo: 'Obra 10',
      imagem: '/img/imagem-10-fundo-preenchido.jpeg',
      categoria: 'Conjunto desenho em folha',
      preco: 39.9,
    },
    {
      titulo: 'Obra 11',
      imagem: '/img/imagem-12-fundo-preenchido.jpeg',
      categoria: 'Mandala',
      preco: 50,
    },
  ];
}
