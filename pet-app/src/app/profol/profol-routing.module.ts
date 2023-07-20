import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfolPage } from './profol.page';

const routes: Routes = [
  {
    path: '',
    component: ProfolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfolPageRoutingModule {}
