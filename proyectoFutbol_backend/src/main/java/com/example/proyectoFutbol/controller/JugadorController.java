package com.example.proyectoFutbol.controller;

import com.example.proyectoFutbol.entity.Equipo;
import com.example.proyectoFutbol.entity.Jugador;
import com.example.proyectoFutbol.repository.EquipoRepository;
import com.example.proyectoFutbol.repository.JugadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jugadores")
public class JugadorController {

    @Autowired
    private JugadorRepository jugadorRepository;

    @Autowired
    private EquipoRepository equipoRepository;

    @GetMapping
    public List<Jugador> listarTodos() {
        return jugadorRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Jugador> obtenerPorId(@PathVariable Long id) {
        return jugadorRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/por-equipo/{equipoId}")
    public List<Jugador> listarPorEquipo(@PathVariable Long equipoId) {
        return jugadorRepository.findByEquipoId(equipoId);
    }

    @PostMapping
    public ResponseEntity<Jugador> crear(@RequestBody Jugador jugador) {
        if (jugador.getEquipo() == null || jugador.getEquipo().getId() == null) {
            return ResponseEntity.badRequest().build();
        }
        return equipoRepository.findById(jugador.getEquipo().getId())
                .map(equipo -> {
                    jugador.setEquipo(equipo);
                    return ResponseEntity.ok(jugadorRepository.save(jugador));
                })
                .orElse(ResponseEntity.badRequest().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Jugador> actualizar(@PathVariable Long id, @RequestBody Jugador jugador) {
        return jugadorRepository.findById(id)
                .map(existente -> {
                    existente.setNombre(jugador.getNombre());
                    existente.setPosicion(jugador.getPosicion());
                    existente.setDorsal(jugador.getDorsal());
                    if (jugador.getEquipo() != null && jugador.getEquipo().getId() != null) {
                        equipoRepository.findById(jugador.getEquipo().getId())
                                .ifPresent(existente::setEquipo);
                    }
                    return ResponseEntity.ok(jugadorRepository.save(existente));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        return jugadorRepository.findById(id)
                .map(existente -> {
                    jugadorRepository.delete(existente);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
