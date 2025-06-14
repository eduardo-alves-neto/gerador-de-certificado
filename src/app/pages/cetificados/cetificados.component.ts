import { Component, OnInit } from '@angular/core';
import { ItemCerticadoComponent } from '../../_components/item-certicado/item-certicado.component';
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';
import { RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado.service';
import { ICertificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-cetificados',
  imports: [ItemCerticadoComponent, SecondaryButtonComponent, RouterLink],
  templateUrl: './cetificados.component.html',
  styleUrl: './cetificados.component.css',
})
export class CetificadosComponent implements OnInit {
  certificados: ICertificado[] = [];
  constructor(private certificadosService: CertificadoService) {}

  ngOnInit(): void {
    this.certificados = this.certificadosService.certificados;
  }
}
