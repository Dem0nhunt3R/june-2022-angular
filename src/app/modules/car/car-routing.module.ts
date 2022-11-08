import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CarsComponent} from "./components/cars/cars.component";
import {CarsResolver} from "./services";

const routes: Routes = [
  {path: '', component: CarsComponent, resolve:{cars:CarsResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule {
}
