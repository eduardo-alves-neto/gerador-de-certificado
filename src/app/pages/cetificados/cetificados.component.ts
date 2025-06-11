import { Component } from '@angular/core';
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button.component";
import { ItemCerticadoComponent } from "../../_components/item-certicado/item-certicado.component";

@Component({
  selector: 'app-cetificados',
  imports: [SecondaryButtonComponent, ItemCerticadoComponent],
  templateUrl: './cetificados.component.html',
  styleUrl: './cetificados.component.css'
})
export class CetificadosComponent {

}
