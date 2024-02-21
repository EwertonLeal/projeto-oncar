import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FinancingPageComponent } from './financing-page/financing-page.component';
import { VehicleicatalogComponent } from './vehicleicatalog/vehicleicatalog.component';
import { VehicleDatailComponent } from './vehicle-datail/vehicle-datail.component';
import { CarsAdminComponent } from './cars-admin/cars-admin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'financiamento',
    component: FinancingPageComponent
  },
  {
    path: 'catalogo',
    component: VehicleicatalogComponent
  },
  {
    path: 'detalhe/:id',
    component: VehicleDatailComponent
  },
  {
    path: 'admin',
    component: CarsAdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
