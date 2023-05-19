import { Component, OnInit } from '@angular/core';
import { Banda } from './banda';
import { bandaService } from './banda.service';
import { bandadetalle } from './banda-detalle';

@Component({
  selector: 'app-banda',
  templateUrl: './Banda.component.html',
  styleUrls: ['./Banda.component.css']
})
export class BandaComponent implements OnInit {

  Bandas: Array<Banda> = [];
  bandaAntigua = "";
  bandaAnio = 0;
  selectedBanda!: bandadetalle;
  selected: Boolean = false;

  constructor(private BandaService: bandaService) { }

  getBandas() {
    this.BandaService.getBandas().subscribe(Bandas => {
      this.Bandas = Bandas;
      this.getBandaAntigua(Bandas);
    });
  }

  onSelected(banda: bandadetalle): void {
    this.selected = true;
    this.selectedBanda = banda;
  }

  getBandaAntigua(Bandas: Array<Banda>) {
    let antigua: string = "";
    const currentYear  = new Date().getFullYear().toString;
    const anioActual: number = +currentYear;
    let anio: number = +currentYear;

    Bandas.forEach((Banda) => {
      if (Banda.foundation_year < anio)
      {
          anio = Banda.foundation_year;
          antigua = Banda.name;
      }
    }
    );
    this.bandaAntigua = antigua;
    this.bandaAnio = anioActual - anio;
  }

  ngOnInit() {
    this.getBandas();
  }

}
