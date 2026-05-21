import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Equipo } from '../models/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  private apiUrl = '/api/equipos';

  constructor(private http: HttpClient) {}

  listarEquipos(): Observable<Equipo[]> {
    return this.http.get<Equipo[]>(this.apiUrl);
  }

  obtenerEquipoPorId(id: number): Observable<Equipo> {
    return this.http.get<Equipo>(`${this.apiUrl}/${id}`);
  }

  crearEquipo(equipo: Omit<Equipo, 'id'>): Observable<Equipo> {
    return this.http.post<Equipo>(this.apiUrl, equipo);
  }

  actualizarEquipo(id: number, equipo: Omit<Equipo, 'id'>): Observable<Equipo> {
    return this.http.put<Equipo>(`${this.apiUrl}/${id}`, equipo);
  }

  eliminarEquipo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
