import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CompraRegistrada } from '../../services/compras.service';
import { FluxoCompraService } from '../../services/fluxo-compra.service';
import { Navbar } from '../../components/navbar/navbar';
import { Inicio } from '../../components/inicio/inicio';
import { Sobre } from '../../components/sobre/sobre';
import { Galeria } from '../../components/galeria/galeria';
import { ObraSelecionada, SessaoDeCompra } from '../../components/sessao-de-compra/sessao-de-compra';

@Component({
  imports: [Navbar, Inicio, Sobre, Galeria, SessaoDeCompra],
  selector: 'app-inicio-page',
  templateUrl: './inicio-page.html',
})
export class InicioPage {
  private readonly router = inject(Router);
  private readonly fluxoCompra = inject(FluxoCompraService);

  obrasNoCarrinho: ObraSelecionada[] = [];

  adicionarAoCarrinho(obra: ObraSelecionada): void {
    if (!this.obrasNoCarrinho.some((item) => item.id === obra.id)) {
      this.obrasNoCarrinho = [...this.obrasNoCarrinho, obra];
    }
  }

  removerDoCarrinho(obra: ObraSelecionada): void {
    this.obrasNoCarrinho = this.obrasNoCarrinho.filter((item) => item.id !== obra.id);
  }

  irParaPagamento(compra: CompraRegistrada): void {
    this.fluxoCompra.definirCompra(compra);
    this.obrasNoCarrinho = [];
    void this.router.navigate(['/pagamento']);
  }
}
