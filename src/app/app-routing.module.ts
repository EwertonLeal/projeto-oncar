import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FinancingPageComponent } from './financing-page/financing-page.component';
import { VehicleicatalogComponent } from './vehicleicatalog/vehicleicatalog.component';
import { VehicleDatailComponent } from './vehicle-datail/vehicle-datail.component';

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
    path: 'financiamento/:id',
    component: FinancingPageComponent
  },
  {
    path: 'catalogo',
    component: VehicleicatalogComponent
  },
  {
    path: 'detalhe',
    component: VehicleDatailComponent
  },
  {
    path: 'detalhe/:id',
    component: VehicleDatailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
