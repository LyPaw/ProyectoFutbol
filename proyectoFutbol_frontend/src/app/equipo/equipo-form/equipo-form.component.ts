import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipoService } from '../../services/equipo.service';

@Component({
  selector: 'app-equipo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './equipo-form.component.html',
  styleUrls: ['./equipo-form.component.css'],
})
export class EquipoFormComponent implements OnInit {
  equipo = { nombre: '', ciudad: '', estadio: '', fundacion: 0 };
  esEdicion = false;
  private idEdicion?: number;

  constructor(
    private equipoService: EquipoService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.esEdicion = true;
      this.idEdicion = Number(id);
      this.equipoService.obtenerEquipoPorId(this.idEdicion).subscribe((data) => {
        this.equipo = {
          nombre: data.nombre,
          ciudad: data.ciudad,
          estadio: data.estadio,
          fundacion: data.fundacion,
        };
      });
    }
  }

  guardar() {
    if (this.esEdicion) {
      this.equipoService.actualizarEquipo(this.idEdicion!, this.equipo).subscribe(() => {
        this.router.navigate(['/equipos']);
      });
    } else {
      this.equipoService.crearEquipo(this.equipo).subscribe(() => {
        this.router.navigate(['/equipos']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/equipos']);
  }
}
