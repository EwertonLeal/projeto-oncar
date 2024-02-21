import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/car-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getCarsInHomePage(): Observable<Car[]> {
    return this.http.get<Car[]>("http://localhost:3000/car/home");
  }

  getCars(filtros?: any): Observable<Car[]> {
    let params = new HttpParams();
    if (filtros?.brand) params = params.set('brand', filtros.brand);
    if (filtros?.model) params = params.set('model', filtros.model);
    if (filtros?.year) params = params.set('year', filtros.year);
    if (filtros?.color) params = params.set('color', filtros.color);


    return this.http.get<Car[]>("http://localhost:3000/car", { params });
  }

  getCarById(id: string) {
    return this.http.get<Car>(`http://localhost:3000/car/${id}`);
  }

  postCar(formData: any) {
    return this.http.post<Car>("http://localhost:3000/car", formData);
  }

  deleteCar(id: string) {
    return this.http.delete(`http://localhost:3000/car/${id}`);
  }

}
