import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  usuario: Usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    email: '',
    tipo: '',
    celular: 0,
    contrasena: '',
  };
  constructor() {}

  ngOnInit(): void {}
  onLogout() {}
}
