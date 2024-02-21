import { Component, OnInit } from '@angular/core';
import { noop } from 'rxjs';
import { Car } from '../models/car-model';
import { CarService } from '../services/car.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-vehicleicatalog',
  templateUrl: './vehicleicatalog.component.html',
  styleUrls: ['./vehicleicatalog.component.scss']
})
export class VehicleicatalogComponent implements OnInit {
  public cars: Car[] = [];
  filtros: any = {};

  constructor(
    private carService: CarService,
  ) {}

  ngOnInit(): void {
    this.buscarVeiculos();
  }

  buscarVeiculos(filtros?: any) {

    this.filtros = filtros;

    this.carService.getCars(this.filtros).subscribe(response => {
      this.cars = response;
      
    });
  }

  clearFIlter() {
    this.buscarVeiculos();
  }
}
