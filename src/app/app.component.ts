import { Component } from '@angular/core';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    BaseUiComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'gerador-de-certificado';
}
