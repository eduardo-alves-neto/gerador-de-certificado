import { Routes } from '@angular/router';
import { CetificadosComponent } from './pages/cetificados/cetificados.component';
import { CertificadoFormComponent } from './_components/certificado-form/certificado-form.component';
import { CertificadoComponent } from './pages/certificado/certificado.component';

export const routes: Routes = [
  {
    path: '',
    component: CetificadosComponent,
  },
  {
    path: 'certificados/novo',
    component: CertificadoFormComponent,
  },
  {
    path: 'certificados/:id',
    component: CertificadoComponent,
  },
];
