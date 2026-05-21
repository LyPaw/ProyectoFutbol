import { Routes } from '@angular/router';
import { EquipoListComponent } from './equipo/equipo-list/equipo-list.component';

export const routes: Routes = [
  { path: 'equipos', component: EquipoListComponent },
  { path: '', redirectTo: 'equipos', pathMatch: 'full' },
];
