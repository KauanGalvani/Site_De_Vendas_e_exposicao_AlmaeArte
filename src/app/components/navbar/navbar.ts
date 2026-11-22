import { Component, Input } from '@angular/core';

interface ItemNavbar {
  titulo: string;
  url: string;
  icone: string;
}

@Component({
  imports: [],
  selector: 'app-navbar',
  templateUrl: './navbar.html',
})
export class Navbar {
  @Input() quantidadeNoCarrinho = 0;
  public readonly itens: ItemNavbar[] = [
    { titulo: 'Inicio', url: '#inicio', icone: 'bi bi-house' },
    { titulo: 'Sobre', url: '#sobre', icone: 'bi bi-person-vcard' },
    { titulo: 'Galeria', url: '#galeria', icone: 'bi bi-brush' },
  ];
}
