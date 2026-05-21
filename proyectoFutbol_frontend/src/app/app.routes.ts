import { Routes } from '@angular/router';
import { EquipoListComponent } from './equipo/equipo-list/equipo-list.component';
import { EquipoFormComponent } from './equipo/equipo-form/equipo-form.component';
import { JugadorListComponent } from './jugador/jugador-list/jugador-list.component';
import { JugadorFormComponent } from './jugador/jugador-form/jugador-form.component';

export const routes: Routes = [
  { path: 'equipos', component: EquipoListComponent },
  { path: 'equipos/nuevo', component: EquipoFormComponent },
  { path: 'equipos/editar/:id', component: EquipoFormComponent },
  { path: 'jugadores', component: JugadorListComponent },
  { path: 'jugadores/nuevo', component: JugadorFormComponent },
  { path: 'jugadores/editar/:id', component: JugadorFormComponent },
  { path: '', redirectTo: 'equipos', pathMatch: 'full' },
];
