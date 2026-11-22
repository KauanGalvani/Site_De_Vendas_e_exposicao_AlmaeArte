import { Component, signal } from '@angular/core';
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
  obraSelecionada: ObraSelecionada | null = null;
  // protected readonly title = signal('Site_De_Vendas_e_exposicao_AlmaeArte');
}
