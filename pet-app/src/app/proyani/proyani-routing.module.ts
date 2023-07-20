import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyaniPage } from './proyani.page';

const routes: Routes = [
  {
    path: '',
    component: ProyaniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyaniPageRoutingModule {}
