import { Component } from '@angular/core';

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
  public readonly itens: ItemNavbar[] = [
    { titulo: 'Inicio', url: '#inicio', icone: 'bi bi-house' },
    { titulo: 'Sobre', url: '#sobre', icone: 'bi bi-person-vcard' },
    { titulo: 'Formação', url: '#formacao', icone: 'bi bi-info-circle' },
    { titulo: 'Galeria', url: '#galeria', icone: 'bi bi-brush' },
  ];
}
