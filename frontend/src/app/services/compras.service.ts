import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Obra } from '../models/obra';

export interface CompraRegistrada {
  id: string;
  criadoEm: string;
  obras: Obra[];
  total: number;
  status: string;
}

@Injectable({ providedIn: 'root' })
export class ComprasService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:5278/api/compras';

  registrar(obraIds: number[]): Observable<CompraRegistrada> {
    return this.http.post<CompraRegistrada>(this.apiUrl, { obraIds });
  }

  confirmarPagamento(compraId: string): Observable<CompraRegistrada> {
    return this.http.post<CompraRegistrada>(
      `${this.apiUrl}/${compraId}/confirmar-pagamento`,
      {},
    );
  }
}
