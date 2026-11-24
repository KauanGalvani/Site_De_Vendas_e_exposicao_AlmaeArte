import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Obra } from '../../models/obra';
import { ObrasService } from '../../services/obras.service';
import { ObraSelecionada } from '../sessao-de-compra/sessao-de-compra';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-galeria',
  templateUrl: './galeria.html',
})
export class Galeria implements OnInit {
  private readonly obrasService = inject(ObrasService);
  @Input() obrasNoCarrinho: ObraSelecionada[] = [];
  @Output() adicionarAoCarrinho = new EventEmitter<ObraSelecionada>();
  obrasGaleria: Obra[] = [];

  ngOnInit(): void {
    this.obrasService.listar().subscribe({
      next: (obras) => {
        this.obrasGaleria = obras;
      },
      error: (erro) => {
        console.error('Erro ao carregar as obras:', erro);
      },
    });
  }

  estaNoCarrinho(obra: ObraSelecionada): boolean {
    return this.obrasNoCarrinho.some((item) => item.imagem === obra.imagem);
  }

}
