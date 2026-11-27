import { Component, EventEmitter, Input, Output, inject, signal } from '@angular/core';
import { Obra } from '../../models/obra';
import { CompraRegistrada, ComprasService } from '../../services/compras.service';

export type ObraSelecionada = Obra;

@Component({
  selector: 'app-sessao-de-compra',
  templateUrl: './sessao-de-compra.html',
})
export class SessaoDeCompra {
  private readonly comprasService = inject(ComprasService);

  @Input() obras: ObraSelecionada[] = [];
  @Output() removerObra = new EventEmitter<ObraSelecionada>();
  @Output() compraCriada = new EventEmitter<CompraRegistrada>();
  readonly registrandoCompra = signal(false);
  readonly erroCompra = signal<string | null>(null);

  get total(): number {
    return this.obras.reduce((soma, obra) => soma + obra.preco, 0);
  }

  formatarMoeda(valor: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
  }

  registrarCompra(): void {
    if (this.obras.length === 0 || this.registrandoCompra()) {
      return;
    }

    this.registrandoCompra.set(true);
    this.erroCompra.set(null);

    const obraIds = this.obras.map((obra) => obra.id);

    this.comprasService.registrar(obraIds).subscribe({
      next: (compra) => {
        this.compraCriada.emit(compra);
        this.registrandoCompra.set(false);
      },
      error: (erro) => {
        console.error('Erro ao registrar a compra:', erro);
        this.erroCompra.set('Não foi possível registrar a compra. Tente novamente.');
        this.registrandoCompra.set(false);
      },
    });
  }
}
