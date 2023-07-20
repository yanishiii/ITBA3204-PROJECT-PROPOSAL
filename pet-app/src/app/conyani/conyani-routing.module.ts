import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConyaniPage } from './conyani.page';

const routes: Routes = [
  {
    path: '',
    component: ConyaniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConyaniPageRoutingModule {}
