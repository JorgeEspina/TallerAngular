import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { Router } from '@angular/router';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: Usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    email: '',
    tipo: '',
    contrasena: '',
  };
  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {}
  UsuarioExistente() {
    this.router.navigate(['/Principal']);
  }
}
