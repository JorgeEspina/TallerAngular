import { Injectable } from '@angular/core';
import { Usuario } from './../models/Usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  usuario: Usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    email: '',
    tipo: '',
    celular: 0,
    contrasena: '',
  };
  constructor(private http: HttpClient) {}

  //Get datos de cliente
  ObtenerDatosCliente(id: number): Observable<any> {
    return this.http.get('https://localhostcliente/' + id);
  }
  // registro un proveedor
  CreateUsuarioProveedor(usuario1: Usuario): Observable<Usuario> {
    return this.http.post('https://localhost/registrar-proveedor', usuario1);
  }

  // Modificar un cliente
  UpdateUsuarioCliente(usuario1: Usuario): Observable<Usuario> {
    return this.http.put('https://localhost/4300/cliente', usuario1);
  }
}
