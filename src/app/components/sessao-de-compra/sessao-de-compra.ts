import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ObraSelecionada {
  titulo: string;
  imagem: string;
}

@Component({
  selector: 'app-sessao-de-compra',
  templateUrl: './sessao-de-compra.html',
})
export class SessaoDeCompra {
  @Input() obras: ObraSelecionada[] = [];
  @Output() removerObra = new EventEmitter<ObraSelecionada>();
  mostrarAviso = false;
}
