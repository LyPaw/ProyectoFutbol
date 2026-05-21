import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { Equipo } from '../../models/equipo';
import { EquipoService } from '../../services/equipo.service';

@Component({
  selector: 'app-equipo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipo-list.component.html',
  styleUrls: ['./equipo-list.component.css'],
})
export class EquipoListComponent implements OnInit, OnDestroy {
  equipos: Equipo[] = [];
  expandido: number | null = null;
  private destruir = new Subject<void>();

  constructor(
    private equipoService: EquipoService,
    private router: Router,
  ) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      takeUntil(this.destruir)
    ).subscribe(() => this.cargar());
  }

  ngOnInit() {
    this.cargar();
  }

  ngOnDestroy() {
    this.destruir.next();
    this.destruir.complete();
  }

  cargar() {
    this.equipoService.listarEquipos().subscribe((data) => (this.equipos = data));
  }

  toggleJugadores(id: number) {
    this.expandido = this.expandido === id ? null : id;
  }

  nuevo() {
    this.router.navigate(['/equipos/nuevo']);
  }

  editar(id: number) {
    this.router.navigate(['/equipos/editar', id]);
  }

  eliminar(id: number) {
    this.equipoService.eliminarEquipo(id).subscribe(() => {
      this.equipos = this.equipos.filter((e) => e.id !== id);
    });
  }
}
