package com.example.proyectoFutbol.service;

import com.example.proyectoFutbol.entity.Equipo;
import com.example.proyectoFutbol.repository.EquipoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EquipoService {

    @Autowired
    private EquipoRepository equipoRepository;

    public List<Equipo> listarTodos() {
        return equipoRepository.findAll();
    }

    public Optional<Equipo> obtenerPorId(Long id) {
        return equipoRepository.findById(id);
    }

    public Equipo crear(Equipo equipo) {
        return equipoRepository.save(equipo);
    }

    public Optional<Equipo> actualizar(Long id, Equipo equipo) {
        return equipoRepository.findById(id).map(existente -> {
            existente.setNombre(equipo.getNombre());
            existente.setCiudad(equipo.getCiudad());
            existente.setEstadio(equipo.getEstadio());
            existente.setFundacion(equipo.getFundacion());
            return equipoRepository.save(existente);
        });
    }

    public boolean eliminar(Long id) {
        return equipoRepository.findById(id).map(equipo -> {
            equipoRepository.delete(equipo);
            return true;
        }).orElse(false);
    }
}
