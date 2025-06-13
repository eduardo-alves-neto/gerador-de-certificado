import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../secondary-button/secondary-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-certicado',
  imports: [SecondaryButtonComponent, RouterLink],
  templateUrl: './item-certicado.component.html',
  styleUrl: './item-certicado.component.css',
})
export class ItemCerticadoComponent {
  id: string = '4';
}
