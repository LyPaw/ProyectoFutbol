import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'equipos',
    renderMode: RenderMode.Client
  },
  {
    path: 'equipos/nuevo',
    renderMode: RenderMode.Client
  },
  {
    path: 'equipos/editar/:id',
    renderMode: RenderMode.Client
  },
  {
    path: 'jugadores',
    renderMode: RenderMode.Client
  },
  {
    path: 'jugadores/nuevo',
    renderMode: RenderMode.Client
  },
  {
    path: 'jugadores/editar/:id',
    renderMode: RenderMode.Client
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
