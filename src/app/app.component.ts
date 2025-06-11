import { Component } from '@angular/core';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { PrimaryButtonComponent } from './_components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './_components/secondary-button/secondary-button.component';
import { ItemCerticadoComponent } from './_components/item-certicado/item-certicado.component';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { CetificadosComponent } from './pages/cetificados/cetificados.component';
import { CertificadoFormComponent } from './_components/certificado-form/certificado-form.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    ItemCerticadoComponent,
    BaseUiComponent,
    CetificadosComponent,
    CertificadoFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'gerador-de-certificado';
}
