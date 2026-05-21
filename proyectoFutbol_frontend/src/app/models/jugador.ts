import type { Equipo } from './equipo';

export interface Jugador {
  id: number;
  nombre: string;
  posicion: string;
  dorsal: number;
  equipo?: Equipo;
}
