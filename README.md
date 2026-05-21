# ProyectoFútbol ⚽

Aplicación web para la gestión de equipos y jugadores de fútbol.

## Stack

- **Frontend:** Angular 21 + TypeScript + RxJS
- **Backend:** Spring Boot 4.0.6 + JPA + H2 (en memoria)
- **Base de datos:** H2 (se recarga con datos seed al iniciar)

## Estructura

```
proyectoFutbol_backend/   → API REST (Java, Spring Boot)
proyectoFutbol_frontend/  → SPA (Angular)
```

## Cómo ejecutar

### Backend

```bash
cd proyectoFutbol_backend
mvnw.cmd spring-boot:run
```

Servidor en `http://localhost:8080`

### Frontend

```bash
cd proyectoFutbol_frontend
npm install
ng serve --no-ssr
```

Servidor en `http://localhost:4200`

El frontend redirige `/api/*` al backend mediante proxy configurado.

## API

| Endpoint | Descripción |
|----------|-------------|
| `GET /api/equipos` | Lista equipos con jugadores |
| `POST /api/equipos` | Crea equipo |
| `PUT /api/equipos/{id}` | Actualiza equipo |
| `DELETE /api/equipos/{id}` | Elimina equipo |
| `GET /api/jugadores` | Lista jugadores |
| `POST /api/jugadores` | Crea jugador |
| `PUT /api/jugadores/{id}` | Actualiza jugador |
| `DELETE /api/jugadores/{id}` | Elimina jugador |

Consola H2: `http://localhost:8080/h2-console` (JDBC: `jdbc:h2:mem:footballdb`)
