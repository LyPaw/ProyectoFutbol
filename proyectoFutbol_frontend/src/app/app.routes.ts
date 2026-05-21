import { Routes } from '@angular/router';
import { EquipoListComponent } from './equipo/equipo-list/equipo-list.component';
import { EquipoFormComponent } from './equipo/equipo-form/equipo-form.component';

export const routes: Routes = [
  { path: 'equipos', component: EquipoListComponent },
  { path: 'equipos/nuevo', component: EquipoFormComponent },
  { path: 'equipos/editar/:id', component: EquipoFormComponent },
  { path: '', redirectTo: 'equipos', pathMatch: 'full' },
];
