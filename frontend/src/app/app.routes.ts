import { Routes } from '@angular/router';
import { InicioPage } from './pages/inicio/inicio-page';
import { PagamentoPage } from './pages/pagamento/pagamento-page';

export const routes: Routes = [
  { path: '', component: InicioPage },
  { path: 'pagamento', component: PagamentoPage },
  { path: '**', redirectTo: '' },
];
