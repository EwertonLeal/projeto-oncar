import { Pipe, PipeTransform } from '@angular/core';
import { Car } from 'src/app/models/car-model';

@Pipe({
  name: 'carYearList'
})
export class CarYearListPipe implements PipeTransform {

  transform(carList: Car[]): string[] {
    let years = carList.map(car => car.year.toString());
    years = Array.from(new Set(years))
    return years
  }

}
