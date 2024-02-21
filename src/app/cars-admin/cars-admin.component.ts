import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../services/car.service';
import { Observable } from 'rxjs';
import { Car } from '../models/car-model';

interface Country {
	name: string;
	flag: string;
	area: number;
	population: number;
}

const COUNTRIES: Country[] = [
	{
		name: 'Russia',
		flag: 'f/f3/Flag_of_Russia.svg',
		area: 17075200,
		population: 146989754,
	},
	{
		name: 'Canada',
		flag: 'c/cf/Flag_of_Canada.svg',
		area: 9976140,
		population: 36624199,
	},
	{
		name: 'United States',
		flag: 'a/a4/Flag_of_the_United_States.svg',
		area: 9629091,
		population: 324459463,
	},
	{
		name: 'China',
		flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
		area: 9596960,
		population: 1409517397,
	},
];

@Component({
  selector: 'cars-admin',
  templateUrl: './cars-admin.component.html',
  styleUrls: ['./cars-admin.component.scss'],
})
export class CarsAdminComponent implements OnInit {
  countries = COUNTRIES;
  carList$!: Observable<Car[]>;
  formulario = new FormGroup({
    marca: new FormControl('', Validators.required),
    modelo: new FormControl('', Validators.required),
    description: new FormControl(''),
    preco: new FormControl('', Validators.required),
    anoFabricacao: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.pattern(/^\d{4}$/)])
    ),
    tipoCombustivel: new FormControl('', Validators.required),
    cor: new FormControl('', Validators.required),
    km: new FormControl('', Validators.required),
    numPortas: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.pattern(/^\d{1}$/)])
    ),
    file: new FormControl(null, Validators.required),
  });
  selectedFile: File | undefined;

  constructor(private carService: CarService) {}

	ngOnInit(): void {
		this.carList$ = this.carService.getCars();
	}

	onDeleteVehicle(id: string) {
		this.carService.deleteCar(id).subscribe(res => {
			this.carList$ = this.carService.getCars();
		});
	}

	onFileSelected(event: any) {
		this.selectedFile = event.target.files[0];
	  }

	onSubmit(event: any) {
		event.preventDefault();

		if(this.formulario.valid) {

			const formData = new FormData();
			formData.append('brand', this.formulario.get("marca")?.value ?? '');
			formData.append('model', this.formulario.get("modelo")?.value ?? '');
			formData.append('description', this.formulario.get("description")?.value ?? '');
			formData.append('price', String(Number(this.formulario.get("preco")?.value ?? 0)));
			formData.append('year', String(Number(this.formulario.get("anoFabricacao")?.value ?? 0)));
			formData.append('fuel', this.formulario.get("tipoCombustivel")?.value ?? '');
			formData.append('color', this.formulario.get("cor")?.value ?? '');
			formData.append('kilometers', String(Number(this.formulario.get("km")?.value ?? 0)));
			formData.append('numOfDoors', String(Number(this.formulario.get("numPortas")?.value ?? 0)));

			if (this.selectedFile) {
				formData.append('carPhoto', this.selectedFile);
			}

			this.carService.postCar(formData).subscribe((res: any) => {
				alert(res.msg)
				
				this.carList$ = this.carService.getCars();
			}, (error) => {
				console.log(error);
				
			})
			
		}

	}

}
