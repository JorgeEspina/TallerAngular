import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  usuario: Usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    email: '',
    tipo: '',
    celular: 9999,
    contrasena: '',
    foto: '',
  };
  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {}
  modificar: boolean = false;
  isLogged: boolean = false;

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      /*this.usuario = this.usuarioService.getCurrentUser();*/
      this.usuarioService.ObtenerDatosCliente(this.usuario.id).subscribe(
        (res) => {
          this.usuario = res;
          this.modificar = true;
          this.isLogged = true;
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  ActualizarPerfil() {
    this.usuarioService.UpdateUsuarioCliente(this.usuario).subscribe(
      (res) => {
        console.log('update');
      },
      (err) => {
        console.log(err);
      }
    );
  }
  Registrarse() {
    this.usuarioService.CreateUsuarioProveedor(this.usuario).subscribe(
      (res) => {
        console.log('guardo');
        /*this.usuarioService.ObtenerDatosCliente(this.usuario.id).subscribe(
          (res) => {
            this.usuario = res;
            this.modificar = true;
            this.isLogged = true;
          },
          (err) => {
            console.log(err);
          }
        );*/
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
