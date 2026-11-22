import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Inicio } from './components/inicio/inicio';
import { Sobre } from './components/sobre/sobre';
import { Galeria } from './components/galeria/galeria';
import { ObraSelecionada, SessaoDeCompra } from './components/sessao-de-compra/sessao-de-compra';

@Component({
  imports: [Navbar, Inicio, Sobre, Galeria, SessaoDeCompra],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  obrasNoCarrinho: ObraSelecionada[] = [];

  adicionarAoCarrinho(obra: ObraSelecionada): void {
    if (!this.obrasNoCarrinho.some((item) => item.imagem === obra.imagem)) {
      this.obrasNoCarrinho = [...this.obrasNoCarrinho, obra];
    }
  }

  removerDoCarrinho(obra: ObraSelecionada): void {
    this.obrasNoCarrinho = this.obrasNoCarrinho.filter((item) => item.imagem !== obra.imagem);
  }
  // protected readonly title = signal('Site_De_Vendas_e_exposicao_AlmaeArte');
}
