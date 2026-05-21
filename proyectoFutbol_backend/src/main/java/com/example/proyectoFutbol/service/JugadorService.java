package com.example.proyectoFutbol.service;

import com.example.proyectoFutbol.entity.Jugador;
import com.example.proyectoFutbol.repository.EquipoRepository;
import com.example.proyectoFutbol.repository.JugadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JugadorService {

    @Autowired
    private JugadorRepository jugadorRepository;

    @Autowired
    private EquipoRepository equipoRepository;

    public List<Jugador> listarTodos() {
        return jugadorRepository.findAll();
    }

    public Optional<Jugador> obtenerPorId(Long id) {
        return jugadorRepository.findById(id);
    }

    public List<Jugador> listarPorEquipo(Long equipoId) {
        return jugadorRepository.findByEquipoId(equipoId);
    }

    public Optional<Jugador> crear(Jugador jugador) {
        if (jugador.getEquipo() == null || jugador.getEquipo().getId() == null) {
            return Optional.empty();
        }
        return equipoRepository.findById(jugador.getEquipo().getId())
                .map(equipo -> {
                    jugador.setEquipo(equipo);
                    return jugadorRepository.save(jugador);
                });
    }

    public Optional<Jugador> actualizar(Long id, Jugador jugador) {
        return jugadorRepository.findById(id).map(existente -> {
            existente.setNombre(jugador.getNombre());
            existente.setPosicion(jugador.getPosicion());
            existente.setDorsal(jugador.getDorsal());
            if (jugador.getEquipo() != null && jugador.getEquipo().getId() != null) {
                equipoRepository.findById(jugador.getEquipo().getId())
                        .ifPresent(existente::setEquipo);
            }
            return jugadorRepository.save(existente);
        });
    }

    public boolean eliminar(Long id) {
        return jugadorRepository.findById(id).map(jugador -> {
            jugadorRepository.delete(jugador);
            return true;
        }).orElse(false);
    }
}
