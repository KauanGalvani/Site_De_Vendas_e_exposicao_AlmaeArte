import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Obra } from '../models/obra';

@Injectable({ providedIn: 'root' })
export class ObrasService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:5278/api/obras';

  listar(): Observable<Obra[]> {
    return this.http.get<Obra[]>(this.apiUrl);
  }
}
