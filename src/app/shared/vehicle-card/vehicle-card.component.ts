import { Component, Input } from '@angular/core';
import { Car } from 'src/app/models/car-model';

@Component({
  selector: 'vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.scss']
})
export class VehicleCardComponent {
  @Input() carData!: Car;
}
