import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipo } from '../../models/equipo';
import { JugadorService } from '../../services/jugador.service';
import { EquipoService } from '../../services/equipo.service';

@Component({
  selector: 'app-jugador-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './jugador-form.component.html',
  styleUrls: ['./jugador-form.component.css'],
})
export class JugadorFormComponent implements OnInit {
  jugador = { nombre: '', posicion: '', dorsal: 0, equipo: { id: 0 } };
  equipos: Equipo[] = [];
  esEdicion = false;
  private idEdicion?: number;

  constructor(
    private jugadorService: JugadorService,
    private equipoService: EquipoService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.equipoService.listarEquipos().subscribe((data) => (this.equipos = data));

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.esEdicion = true;
      this.idEdicion = Number(id);
      this.jugadorService.obtenerJugadorPorId(this.idEdicion).subscribe((data) => {
        this.jugador = {
          nombre: data.nombre,
          posicion: data.posicion,
          dorsal: data.dorsal,
          equipo: { id: data.equipo!.id! },
        };
      });
    }
  }

  guardar() {
    if (!this.jugador.equipo.id || !this.jugador.nombre.trim()) return;

    const obs = this.esEdicion
      ? this.jugadorService.actualizarJugador(this.idEdicion!, this.jugador)
      : this.jugadorService.crearJugador(this.jugador);

    obs.subscribe({
      next: () => this.router.navigate(['/jugadores']),
      error: (err) => console.error('Error al guardar jugador', err),
    });
  }

  cancelar() {
    this.router.navigate(['/jugadores']);
  }
}
