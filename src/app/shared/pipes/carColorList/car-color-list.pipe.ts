import { Pipe, PipeTransform } from '@angular/core';
import { Car } from 'src/app/models/car-model';

@Pipe({
  name: 'carColorList'
})
export class CarColorListPipe implements PipeTransform {

  transform(carList: Car[]): string[] {
    let colors = carList.map(car => car.color);
    colors = Array.from(new Set(colors))
    return colors
  }

}
