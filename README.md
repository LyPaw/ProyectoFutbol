# ProyectoFutbol

Aplicación web de gestión de equipos de fútbol. Backend construido con Spring Boot 3 + JPA + H2.

## Stack tecnológico

- **Backend:** Spring Boot, Spring Data JPA, H2 Database
- **Frontend:** Angular (próximamente)

## Backend - Cómo ejecutar

```bash
cd proyectoFutbol_backend
./mvnw spring-boot:run
```

El servidor arranca en `http://localhost:8080`.

## Endpoints API REST

### Equipos

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/equipos` | Lista todos los equipos (con sus jugadores) |
| GET | `/api/equipos/{id}` | Obtiene un equipo por ID |
| POST | `/api/equipos` | Crea un nuevo equipo |
| PUT | `/api/equipos/{id}` | Actualiza un equipo |
| DELETE | `/api/equipos/{id}` | Elimina un equipo |

### Jugadores

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/jugadores` | Lista todos los jugadores |
| GET | `/api/jugadores/{id}` | Obtiene un jugador por ID |
| GET | `/api/jugadores/por-equipo/{equipoId}` | Jugadores de un equipo |
| POST | `/api/jugadores` | Crea un jugador (enviar `equipo.id` en el body) |
| PUT | `/api/jugadores/{id}` | Actualiza un jugador |
| DELETE | `/api/jugadores/{id}` | Elimina un jugador |

## Ejemplos de peticiones

### Crear un jugador (POST /api/jugadores)

```json
{
  "nombre": "Kylian Mbappé",
  "posicion": "Delantero",
  "dorsal": 9,
  "equipo": { "id": 1 }
}
```

## Consola H2

Disponible en `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:mem:footballdb`
- User: `sa`
- Password: (vacío)
