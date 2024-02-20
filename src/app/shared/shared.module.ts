import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OncarInputSelect } from './search-car-brand/search-car-brand.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { OncarInputComponent } from './oncar-input/oncar-input.component';
import { VehicleCardComponent } from './vehicle-card/vehicle-card.component';


@NgModule({
  declarations: [
    OncarInputSelect,
    OncarInputComponent,
    VehicleCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule
  ],
  exports: [
    OncarInputSelect,
    OncarInputComponent,
    VehicleCardComponent
  ]
})
export class SharedModule { }
