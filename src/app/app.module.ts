import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FinancingPageComponent } from './financing-page/financing-page.component';
import { VehicleicatalogComponent } from './vehicleicatalog/vehicleicatalog.component';
import { VehicleDatailComponent } from './vehicle-datail/vehicle-datail.component';
import { HttpClientModule } from '@angular/common/http';
import { CarsAdminComponent } from './cars-admin/cars-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FinancingPageComponent,
    VehicleicatalogComponent,
    VehicleDatailComponent,
    CarsAdminComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatIconModule,
    MatToolbarModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
