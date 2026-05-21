# Documentación API REST - ProyectoFútbol

**Base URL:** `http://localhost:8080`

---

## Equipos (`/api/equipos`)

### `GET /api/equipos`
Lista todos los equipos con sus jugadores.

### `GET /api/equipos/{id}`
Obtiene un equipo por ID.

### `POST /api/equipos`
Crea un nuevo equipo.

```json
{
  "nombre": "Atlético de Madrid",
  "ciudad": "Madrid",
  "estadio": "Metropolitano",
  "fundacion": 1903
}
```

### `PUT /api/equipos/{id}`
Actualiza un equipo existente.

```json
{
  "nombre": "Atlético de Madrid",
  "ciudad": "Madrid",
  "estadio": "Cívitas Metropolitano",
  "fundacion": 1903
}
```

### `DELETE /api/equipos/{id}`
Elimina un equipo por ID.

---

## Jugadores (`/api/jugadores`)

### `GET /api/jugadores`
Lista todos los jugadores.

### `GET /api/jugadores/{id}`
Obtiene un jugador por ID.

### `GET /api/jugadores/por-equipo/{equipoId}`
Lista los jugadores de un equipo específico.

### `POST /api/jugadores`
Crea un nuevo jugador (el `equipo.id` debe existir).

```json
{
  "nombre": "Kylian Mbappé",
  "posicion": "Delantero",
  "dorsal": 9,
  "equipo": { "id": 1 }
}
```

### `PUT /api/jugadores/{id}`
Actualiza un jugador existente.

```json
{
  "nombre": "Kylian Mbappé",
  "posicion": "Delantero",
  "dorsal": 10,
  "equipo": { "id": 1 }
}
```

### `DELETE /api/jugadores/{id}`
Elimina un jugador por ID.

---

## Consola H2

```
URL:    http://localhost:8080/h2-console
JDBC:   jdbc:h2:mem:footballdb
User:   sa
Pass:   (vacío)
```

## Notas

| # | Regla |
|---|-------|
| 1 | Content-Type siempre `application/json` |
| 2 | El `id` no se envía al crear (lo genera la BD) |
| 3 | `fundacion` es número (año) |
| 4 | `dorsal` es número |
| 5 | Para crear un jugador, `equipo.id` debe ser un ID existente |
| 6 | Los datos se borran al reiniciar el servidor (H2 en memoria) |
