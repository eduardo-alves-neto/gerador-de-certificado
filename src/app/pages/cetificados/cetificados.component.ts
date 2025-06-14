import { Component } from '@angular/core';

import { ItemCerticadoComponent } from '../../_components/item-certicado/item-certicado.component';
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cetificados',
  imports: [ItemCerticadoComponent, SecondaryButtonComponent, RouterLink],
  templateUrl: './cetificados.component.html',
  styleUrl: './cetificados.component.css',
})
export class CetificadosComponent {}
