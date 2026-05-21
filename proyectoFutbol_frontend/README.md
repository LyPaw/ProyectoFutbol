# Frontend - ProyectoFútbol

Aplicación web para la gestión de equipos y jugadores de fútbol, desarrollada con **Angular 21**.

---

## Tecnologías

- Angular 21
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
src/app/
├── equipo/
│   ├── equipo-list/         ← Listado de equipos con tabla expandible de jugadores
│   └── equipo-form/         ← Formulario crear/editar equipo
├── jugador/
│   ├── jugador-list/        ← Listado de todos los jugadores
│   └── jugador-form/        ← Formulario crear/editar jugador
├── models/                  ← Interfaces (equipo.ts, jugador.ts, crear-jugador-request.ts)
├── services/                ← Servicios HTTP (equipo.service.ts, jugador.service.ts)
├── app.ts                   ← Componente raíz con navegación por pestañas
├── app.html                 ← Template raíz
├── app.css                  ← Estilos globales
├── app.config.ts            ← Configuración de Angular (router, HttpClient)
└── app.routes.ts            ← Definición de rutas
```

---

## Funcionalidades

### Equipos
- Listado de equipos con sus jugadores en tabla expandible (▶/▼)
- Crear nuevo equipo
- Editar equipo existente
- Eliminar equipo

### Jugadores
- Listado de todos los jugadores
- Crear nuevo jugador (asignado a un equipo existente)
- Editar jugador existente
- Eliminar jugador

---

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/equipos` | Lista de equipos |
| `/equipos/nuevo` | Formulario para crear un equipo |
| `/equipos/editar/:id` | Formulario para editar un equipo |
| `/jugadores` | Lista de jugadores |
| `/jugadores/nuevo` | Formulario para crear un jugador |
| `/jugadores/editar/:id` | Formulario para editar un jugador |

---

## Conexión con el backend

El frontend se conecta al backend Spring Boot mediante `HttpClient` con un proxy configurado en `proxy.conf.json`:

```
/api/* → http://localhost:8080
```

El backend debe correr en `http://localhost:8080` y tener CORS habilitado para `http://localhost:4200`.

---

## Build para producción

```bash
ng build
```

Los archivos generados se guardan en `dist/futbol-manager/`.
