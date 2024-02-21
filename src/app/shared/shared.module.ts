import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

import { OncarInputComponent } from './oncar-input/oncar-input.component';
import { VehicleCardComponent } from './vehicle-card/vehicle-card.component';
import { MatOncarAutocompleteComponent } from './mat-oncar-autocomplete/mat-oncar-autocomplete.component';
import { CarBrandListPipe } from './pipes/carBrandList/car-brand-list.pipe';
import { CarModelListPipe } from './pipes/carModelList/car-model-list.pipe';
import { CarColorListPipe } from './pipes/carColorList/car-color-list.pipe';
import { CarYearListPipe } from './pipes/carYearList/car-year-list.pipe';
import { MatOptionModule } from '@angular/material/core';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';


@NgModule({
  declarations: [
    OncarInputComponent,
    VehicleCardComponent,
    MatOncarAutocompleteComponent,
    CarBrandListPipe,
    CarModelListPipe,
    CarColorListPipe,
    CarYearListPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    NgxMatSelectSearchModule,
    MatAutocompleteModule,
    MatIconModule,
    MatTableModule
  ],
  exports: [
    OncarInputComponent,
    VehicleCardComponent,
    MatOncarAutocompleteComponent,
    CarBrandListPipe,
    CarModelListPipe,
    CarColorListPipe,
    CarYearListPipe
  ]
})
export class SharedModule { }
