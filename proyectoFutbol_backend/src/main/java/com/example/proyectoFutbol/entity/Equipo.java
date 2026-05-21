package com.example.proyectoFutbol.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter @NoArgsConstructor
public class Equipo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String ciudad;
    private String estadio;
    private Integer fundacion;

    @OneToMany(mappedBy = "equipo", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnoreProperties("equipo")
    private List<Jugador> jugadores = new ArrayList<>();

    public Equipo(String nombre, String ciudad, String estadio, Integer fundacion) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.estadio = estadio;
        this.fundacion = fundacion;
    }
}
