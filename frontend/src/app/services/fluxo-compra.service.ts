import { Injectable, signal } from '@angular/core';
import { CompraRegistrada } from './compras.service';

@Injectable({ providedIn: 'root' })
export class FluxoCompraService {
  private readonly compraAtual = signal<CompraRegistrada | null>(null);
  readonly compra = this.compraAtual.asReadonly();

  definirCompra(compra: CompraRegistrada): void {
    this.compraAtual.set(compra);
  }

  atualizarCompra(compra: CompraRegistrada): void {
    this.compraAtual.set(compra);
  }
}
