package com.example.proyectoFutbol.service;

import com.example.proyectoFutbol.dto.PlayerDTO;
import com.example.proyectoFutbol.temp.Player;
import com.example.proyectoFutbol.temp.Team;
import com.example.proyectoFutbol.temp.PlayerRepository;
import com.example.proyectoFutbol.temp.TeamRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PlayerService {
    private final PlayerRepository playerRepo;
    private final TeamRepository teamRepo;

    public PlayerService(PlayerRepository playerRepo, TeamRepository teamRepo) {
        this.playerRepo = playerRepo;
        this.teamRepo = teamRepo;
    }

    public List<Player> getAll() {
        return playerRepo.findAll();
    }

    public Player create(PlayerDTO dto) {
        Team team = teamRepo.findById(dto.teamId())
                .orElseThrow(() -> new RuntimeException("Equipo no encontrado con id: " + dto.teamId()));

        Player player = new Player();
        player.setName(dto.name());
        player.setPosition(dto.position());
        player.setNumber(dto.number());
        player.setTeam(team);
        return playerRepo.save(player);
    }

    public void delete(Long id) {
        if (!playerRepo.existsById(id)) {
            throw new RuntimeException("Jugador no encontrado con id: " + id);
        }
        playerRepo.deleteById(id);
    }
}