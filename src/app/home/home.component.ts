import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car-model';
import { Router } from '@angular/router';
import { FinancingService } from '../services/financiamento/financing-service';
import { CarService } from '../services/car.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  value:string = '';
  financialValue: string = '';
  public carsInHomePage$!: Observable<Car[]>;

  constructor(
    private router: Router, 
    private carService: CarService,
    private financingService: FinancingService
  ) {}

  ngOnInit(): void {
    this.carsInHomePage$ = this.carService.getCarsInHomePage();
  }

  public onGetFinancing() {
    this.financingService.getFinancingByPrice(+this.financialValue);
    this.router.navigate(['/financiamento']);
  }

}
