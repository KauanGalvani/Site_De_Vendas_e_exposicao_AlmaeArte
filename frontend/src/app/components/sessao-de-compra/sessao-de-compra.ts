import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ObraSelecionada {
  titulo: string;
  imagem: string;
  categoria: string;
  preco: number;
}

@Component({
  selector: 'app-sessao-de-compra',
  templateUrl: './sessao-de-compra.html',
})
export class SessaoDeCompra {
  @Input() obras: ObraSelecionada[] = [];
  @Output() removerObra = new EventEmitter<ObraSelecionada>();
  mostrarAviso = false;

  get total(): number {
    return this.obras.reduce((soma, obra) => soma + obra.preco, 0);
  }

  formatarMoeda(valor: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
  }
}
