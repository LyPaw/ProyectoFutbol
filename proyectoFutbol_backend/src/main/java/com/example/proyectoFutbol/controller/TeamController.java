package com.example.proyectoFutbol.controller;

import com.example.proyectoFutbol.temp.Team;
import com.example.proyectoFutbol.temp.TeamRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/teams")
public class TeamController {
    private final TeamRepository repo;
    public TeamController(TeamRepository repo) { this.repo = repo; }

    @GetMapping
    public ResponseEntity<List<Team>> getAll() {
        return ResponseEntity.ok(repo.findAll());
    }
}