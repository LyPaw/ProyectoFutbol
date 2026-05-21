# Backend - ProyectoFútbol

API REST para gestión de equipos de fútbol construida con Spring Boot 3 + JPA + H2.

## Estructura del proyecto

```
src/main/java/com/example/proyectoFutbol/
├── controller/       ← Controladores REST (EquipoController, JugadorController)
├── service/          ← Lógica de negocio (EquipoService, JugadorService)
├── repository/       ← Acceso a base de datos (JPA Repository)
├── entity/           ← Modelos de datos (Equipo, Jugador)
└── ProyectoFutbolApplication.java  ← Punto de entrada
```

## Tecnologías

- Spring Boot 3
- Spring Data JPA (Hibernate)
- H2 Database (en memoria)
- Lombok

## Cómo ejecutar

```bash
./mvnw spring-boot:run
```

Servidor en `http://localhost:8080`.

## API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/equipos` | Lista equipos |
| POST | `/api/equipos` | Crea equipo |
| GET | `/api/jugadores` | Lista jugadores |
| POST | `/api/jugadores` | Crea jugador |

Consola H2: `http://localhost:8080/h2-console` (JDBC: `jdbc:h2:mem:footballdb`)
