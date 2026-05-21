import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { Jugador } from '../../models/jugador';
import { JugadorService } from '../../services/jugador.service';

@Component({
  selector: 'app-jugador-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jugador-list.component.html',
  styleUrls: ['./jugador-list.component.css'],
})
export class JugadorListComponent implements OnInit, OnDestroy {
  jugadores: Jugador[] = [];
  private destruir = new Subject<void>();

  constructor(
    private jugadorService: JugadorService,
    private router: Router,
  ) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      takeUntil(this.destruir)
    ).subscribe(() => this.cargarJugadores());
  }

  ngOnInit() {
    this.cargarJugadores();
  }

  ngOnDestroy() {
    this.destruir.next();
    this.destruir.complete();
  }

  cargarJugadores() {
    this.jugadorService.listarJugadores().subscribe((data) => (this.jugadores = data));
  }

  nuevo() {
    this.router.navigate(['/jugadores/nuevo']);
  }

  editar(id: number) {
    this.router.navigate(['/jugadores/editar', id]);
  }

  eliminar(id: number) {
    this.jugadorService.eliminarJugador(id).subscribe(() => {
      this.jugadores = this.jugadores.filter((j) => j.id !== id);
    });
  }
}
