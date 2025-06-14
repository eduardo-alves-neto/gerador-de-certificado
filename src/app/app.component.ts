import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { RouterOutlet } from '@angular/router';
import { CertificadoService } from './_services/certificado.service';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, BaseUiComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
  
export class AppComponent implements OnInit {
  title = 'gerador-de-certificado';
  constructor(private certificadosService: CertificadoService) {}

  ngOnInit(): void {
    const certificados = localStorage.getItem('certificados');
    this.certificadosService.certificados = certificados
      ? JSON.parse(certificados)
      : [];
  }
}
