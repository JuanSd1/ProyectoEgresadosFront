import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Usuario } from '../domain/listar';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //variable para almacenar la respuesta del servicio
  UsuarioInfo: Usuario[] = [];


  nombres!: string;
  apellidos!: string
  constructor(private listarService: DashboardService) {
  }

  ngOnInit(): void {
    this.cargarDataTabla();

  }

  /**
   * Carga la informacion en  la tabla de usuarios
   */
  cargarDataTabla() {
    this.listarService.listarUsuarios().subscribe(
      (usuarios: Usuario[]) => {
       this.UsuarioInfo = usuarios;
      },
      error => {
        console.error('Error al cargar la información', error);
      }
    );
  }

}
