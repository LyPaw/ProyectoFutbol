import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipo } from '../../models/equipo';
import { EquipoService } from '../../services/equipo.service';

@Component({
  selector: 'app-equipo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './equipo-form.component.html',
  styleUrls: ['./equipo-form.component.css'],
})
export class EquipoFormComponent implements OnInit {
  equipo: Equipo = { nombre: '', ciudad: '', estadio: '', fundacion: 0 };
  esEdicion = false;

  constructor(
    private equipoService: EquipoService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.esEdicion = true;
      this.equipoService.obtenerEquipoPorId(Number(id)).subscribe((data) => {
        this.equipo = data;
      });
    }
  }

  guardar() {
    if (this.esEdicion) {
      this.equipoService.actualizarEquipo(this.equipo.id, this.equipo).subscribe(() => {
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
