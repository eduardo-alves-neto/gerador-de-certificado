import { Component, Input } from '@angular/core';
import { SecondaryButtonComponent } from '../secondary-button/secondary-button.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-certicado',
  imports: [SecondaryButtonComponent],
  templateUrl: './item-certicado.component.html',
  styleUrl: './item-certicado.component.css',
})
export class ItemCerticadoComponent {
  @Input() nomeAluno: string = '';
  @Input() data: string = '';
  @Input() id: string = '0';

  constructor(private router: Router) {}

  redirecionaCertificado(): void {
    this.router.navigate(['/certificados', this.id]);
  }
}
