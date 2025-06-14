import { Component, ViewChild } from '@angular/core';
import { SecondaryButtonComponent } from '../secondary-button/secondary-button.component';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ICertificado } from '../../interfaces/certificado';
import { CertificadoService } from '../../_services/certificado.service';
import { v4 as uuid } from 'uuid';
import { Router } from '@angular/router';
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
  atividade: string = '';

  constructor(
    private certificadoService: CertificadoService,
    private route: Router
  ) {}

  @ViewChild('form') form!: NgModel;

  certificado: ICertificado = this.estadoInicialCertificado();

  campoInValido(control: NgModel): boolean {
    return (control.invalid && control.touched) || false;
  }

  formValido(): boolean {
    return (
      this.certificado.atividades.length > 0 &&
      this.certificado?.nome.length > 0
    );
  }

  changeActivities(): void {
    if (this.atividade.length === 0) return;
    this.certificado.atividades.push(this.atividade);
    this.atividade = '';
  }

  removeActivity(indexActivity: number): void {
    this.certificado.atividades.splice(indexActivity, 1);
  }

  submit(): void {
    if (!this.formValido()) {
      return;
    }
    this.certificado.id = uuid();
    this.certificado.dataEmissao = this.dataAtual();
    this.certificadoService.adicionarCertificado(this.certificado);

    this.route.navigate(['certificados', this.certificado.id]);
    // this.certificado = this.estadoInicialCertificado();
    // this.form.reset();
  }

  dataAtual(): string {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();
    const dataFormatada = `${dia}/${mes}/${ano}`;

    return dataFormatada;
  }

  estadoInicialCertificado() {
    return {
      id: '',
      atividades: [],
      nome: '',
      dataEmissao: '',
    };
  }
}
