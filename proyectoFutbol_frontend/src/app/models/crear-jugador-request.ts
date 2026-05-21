export interface CrearJugadorRequest {
  nombre: string;
  posicion: string;
  dorsal: number;
  equipo: {
    id: number;
  };
}
