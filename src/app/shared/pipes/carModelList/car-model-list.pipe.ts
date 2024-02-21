import { Pipe, PipeTransform } from '@angular/core';
import { Car } from 'src/app/models/car-model';

@Pipe({
  name: 'carModelList'
})
export class CarModelListPipe implements PipeTransform {

  transform(carList: Car[]): string[] {
    let models = carList.map(car => car.model);
    models = Array.from(new Set(models))
    return models
  }

}
