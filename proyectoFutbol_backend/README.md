# Backend - ProyectoFútbol

API REST para gestión de equipos y jugadores de fútbol construida con Spring Boot 4 + JPA + H2.

## Estructura del proyecto

```
src/main/java/com/example/proyectoFutbol/
├── config/          ← Configuración (CorsConfig)
├── controller/      ← Controladores REST (EquipoController, JugadorController)
├── service/         ← Lógica de negocio (EquipoService, JugadorService)
├── repository/      ← Acceso a base de datos (JPA Repository)
├── entity/          ← Modelos de datos (Equipo, Jugador)
└── ProyectoFutbolApplication.java  ← Punto de entrada
```

## Tecnologías

- Spring Boot 4.0.6
- Spring Data JPA (Hibernate)
- H2 Database (en memoria)
- Lombok

## Cómo ejecutar

```bash
mvnw.cmd spring-boot:run
```

Servidor en `http://localhost:8080`.

## API

### Equipos (`/api/equipos`)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/equipos` | Lista equipos con sus jugadores |
| GET | `/api/equipos/{id}` | Obtiene un equipo por ID |
| POST | `/api/equipos` | Crea un equipo |
| PUT | `/api/equipos/{id}` | Actualiza un equipo |
| DELETE | `/api/equipos/{id}` | Elimina un equipo |

### Jugadores (`/api/jugadores`)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/jugadores` | Lista todos los jugadores |
| GET | `/api/jugadores/{id}` | Obtiene un jugador por ID |
| GET | `/api/jugadores/por-equipo/{equipoId}` | Lista jugadores de un equipo |
| POST | `/api/jugadores` | Crea un jugador |
| PUT | `/api/jugadores/{id}` | Actualiza un jugador |
| DELETE | `/api/jugadores/{id}` | Elimina un jugador |

Consola H2: `http://localhost:8080/h2-console` (JDBC: `jdbc:h2:mem:footballdb`)
