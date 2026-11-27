import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CompraRegistrada, ComprasService } from '../../services/compras.service';
import { FluxoCompraService } from '../../services/fluxo-compra.service';

@Component({
  selector: 'app-pagamento-page',
  templateUrl: './pagamento-page.html',
})
export class PagamentoPage {
  private readonly comprasService = inject(ComprasService);
  private readonly fluxoCompra = inject(FluxoCompraService);
  private readonly router = inject(Router);

  readonly compra = this.fluxoCompra.compra;
  readonly processando = signal(false);
  readonly erro = signal<string | null>(null);

  formatarMoeda(valor: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
  }

  confirmarPagamento(): void {
    const compraAtual = this.compra();
    if (!compraAtual || this.processando()) {
      return;
    }

    this.processando.set(true);
    this.erro.set(null);

    this.comprasService.confirmarPagamento(compraAtual.id).subscribe({
      next: (compraAtualizada) => {
        this.fluxoCompra.atualizarCompra(compraAtualizada);
        this.processando.set(false);
      },
      error: (erro) => {
        console.error('Erro ao confirmar o pagamento demonstrativo:', erro);
        this.erro.set('Não foi possível confirmar o pagamento demonstrativo. Tente novamente.');
        this.processando.set(false);
      },
    });
  }

  voltarParaLoja(): void {
    void this.router.navigate(['/']);
  }
}
