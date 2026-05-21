import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Jugador } from '../models/jugador';
import { CrearJugadorRequest } from '../models/crear-jugador-request';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  private apiUrl = '/api/jugadores';

  constructor(private http: HttpClient) {}

  listarJugadores(): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(this.apiUrl);
  }

  obtenerJugadorPorId(id: number): Observable<Jugador> {
    return this.http.get<Jugador>(`${this.apiUrl}/${id}`);
  }

  listarJugadoresPorEquipo(equipoId: number): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(`${this.apiUrl}/por-equipo/${equipoId}`);
  }

  crearJugador(jugador: CrearJugadorRequest): Observable<Jugador> {
    return this.http.post<Jugador>(this.apiUrl, jugador);
  }

  actualizarJugador(id: number, jugador: CrearJugadorRequest): Observable<Jugador> {
    return this.http.put<Jugador>(`${this.apiUrl}/${id}`, jugador);
  }

  eliminarJugador(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
