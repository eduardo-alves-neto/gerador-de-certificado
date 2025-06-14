import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../secondary-button/secondary-button.component';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificado-form',
  imports: [
    SecondaryButtonComponent,
    PrimaryButtonComponent,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.css',
})
export class CertificadoFormComponent {
  nome: string = '';
  atividade: string = '';
  atividades: string[] = ['Angular', 'React', 'Cobol'];

  campoInValido(control: NgModel): boolean {
    return (control.invalid && control.touched) || false;
  }

  formValido(): boolean {
    return this.atividades.length > 0 && this.nome.length > 0;
  }
}
