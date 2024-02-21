import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../services/car.service';
import { Car } from '../models/car-model';
import { noop } from 'rxjs';
import { FinancingService } from '../services/financiamento/financing-service';

@Component({
  selector: 'app-vehicle-datail',
  templateUrl: './vehicle-datail.component.html',
  styleUrls: ['./vehicle-datail.component.scss']
})
export class VehicleDatailComponent implements OnInit {
  
  public carDatail!: Car;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private router: Router, 
    private financingService: FinancingService
  ) {}

  ngOnInit(): void {
    let carById = this.carService.getCarById(this.route.snapshot.params["id"])
    .subscribe(res => {
      this.carDatail = res;
    },
    noop, 
    () => {
      carById.unsubscribe();
    });
  }

  public onGetFinancing() {
    this.financingService.getFinancingByPrice(+this.carDatail.price);
    this.router.navigate(['/financiamento']);
  }

}
