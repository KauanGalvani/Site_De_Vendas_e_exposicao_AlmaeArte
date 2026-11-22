import { Component, Input } from '@angular/core';

export interface ObraSelecionada {
  titulo: string;
  imagem: string;
}

@Component({
  selector: 'app-sessao-de-compra',
  templateUrl: './sessao-de-compra.html',
})
export class SessaoDeCompra {
  @Input() obra: ObraSelecionada | null = null;
  mostrarAviso = false;
}
