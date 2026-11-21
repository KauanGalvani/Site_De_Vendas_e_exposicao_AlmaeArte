import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Inicio } from './components/inicio/inicio';

@Component({
  imports: [Navbar, Inicio],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  // protected readonly title = signal('Site_De_Vendas_e_exposicao_AlmaeArte');
}
