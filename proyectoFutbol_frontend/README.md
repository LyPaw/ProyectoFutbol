# Frontend - ProyectoFútbol

Aplicación web para la gestión de equipos y jugadores de fútbol, desarrollada con **Angular 18**.

---

## Tecnologías

- Angular 18
- TypeScript
- HTML5 / CSS3
- RxJS

---

## Requisitos previos

- Node.js 18+
- Angular CLI (`npm install -g @angular/cli`)

---

## Instalación

```bash
# Clona el repositorio
git clone <url-del-repositorio>

# Entra en la carpeta del frontend
cd futbol-manager

# Instala las dependencias
npm install
```

---

## Ejecución en desarrollo

```bash
ng serve --no-ssr
```

Abre el navegador en `http://localhost:4200`.

---

## Estructura de carpetas

```
futbol-manager/
└── src/
    └── app/
        ├── equipo/
        │   ├── equipo-list/
        │   │   ├── equipo-list.component.ts
        │   │   ├── equipo-list.component.html
        │   │   └── equipo-list.component.css
        │   └── equipo-form/
        │       ├── equipo-form.component.ts
        │       ├── equipo-form.component.html
        │       └── equipo-form.component.css
        ├── equipo.model.ts
        ├── equipo.service.ts
        ├── app.component.ts
        ├── app.component.html
        └── app.routes.ts
```

---

## Funcionalidades

- Listado de equipos de fútbol
- Crear nuevo equipo
- Editar equipo existente
- Eliminar equipo

---

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/equipos` | Lista de equipos |
| `/equipos/nuevo` | Formulario para crear un equipo |
| `/equipos/editar/:id` | Formulario para editar un equipo |

---

## Conexión con el backend

Por defecto la aplicación usa datos mock. Para conectarla al backend Spring Boot, abre `src/app/equipo.service.ts` e inyecta `HttpClient`:

```typescript
import { HttpClient } from '@angular/common/http';

constructor(private http: HttpClient) {}

private apiUrl = 'http://localhost:8080/api/equipos';

getEquipos() {
  return this.http.get<Equipo[]>(this.apiUrl);
}

getEquipo(id: number) {
  return this.http.get<Equipo>(`${this.apiUrl}/${id}`);
}

createEquipo(equipo: Equipo) {
  return this.http.post<Equipo>(this.apiUrl, equipo);
}

updateEquipo(equipo: Equipo) {
  return this.http.put<Equipo>(`${this.apiUrl}/${equipo.id}`, equipo);
}

deleteEquipo(id: number) {
  return this.http.delete(`${this.apiUrl}/${id}`);
}
```

Y añade `provideHttpClient()` en `app.config.ts`:

```typescript
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};
```

El backend debe correr en `http://localhost:8080` y tener CORS habilitado para `http://localhost:4200`.

---

## Build para producción

```bash
ng build
```

Los archivos generados se guardan en `dist/futbol-manager/`.
