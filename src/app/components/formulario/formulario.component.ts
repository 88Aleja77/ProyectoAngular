import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Gerente } from 'src/app/models/aqi.model';
import { PedirDatosService } from 'src/app/services/pedir-datos.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  constructor(private datos: PedirDatosService) {
  }

  ngOnInit(): void {
  }

}
