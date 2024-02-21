import { Pipe, PipeTransform } from '@angular/core';
import { Car } from 'src/app/models/car-model';

@Pipe({
  name: 'carBrandList'
})
export class CarBrandListPipe implements PipeTransform {

  transform(carList: Car[]): string[] {
    let brands = carList.map(car => car.brand);
    brands = Array.from(new Set(brands))
    return brands
  }

}
