import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Equipo } from './equipo.model';

@Injectable({ providedIn: 'root' })
export class EquipoService {
  private equipos: Equipo[] = [
    { id: 1, nombre: 'Real Madrid', ciudad: 'Madrid', estadio: 'Bernabéu', fundacion: 1902 },
    {
      id: 2,
      nombre: 'FC Barcelona',
      ciudad: 'Barcelona',
      estadio: 'Spotify Camp Nou',
      fundacion: 1899,
    },
  ];

  getEquipos() {
    return of(this.equipos);
  }

  getEquipo(id: number) {
    return of(this.equipos.find((e) => e.id === id));
  }

  createEquipo(equipo: Equipo) {
    equipo.id = this.equipos.length + 1;
    this.equipos.push(equipo);
    return of(equipo);
  }

  updateEquipo(equipo: Equipo) {
    const i = this.equipos.findIndex((e) => e.id === equipo.id);
    this.equipos[i] = equipo;
    return of(equipo);
  }

  deleteEquipo(id: number) {
    this.equipos = this.equipos.filter((e) => e.id !== id);
    return of(true);
  }
}
