import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Equipo } from '../../models/equipo';
import { EquipoService } from '../../services/equipo.service';

@Component({
  selector: 'app-equipo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipo-list.component.html',
  styleUrls: ['./equipo-list.component.css'],
})
export class EquipoListComponent implements OnInit {
  equipos: Equipo[] = [];

  constructor(
    private equipoService: EquipoService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.equipoService.listarEquipos().subscribe((data) => (this.equipos = data));
  }

  nuevo() {
    this.router.navigate(['/equipos/nuevo']);
  }

  editar(id: number) {
    this.router.navigate(['/equipos/editar', id]);
  }

  eliminar(id: number) {
    this.equipoService.eliminarEquipo(id).subscribe(() => {
      this.equipos = this.equipos.filter((e) => e.id !== id);
    });
  }
}
