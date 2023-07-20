import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClinboxPage } from './clinbox.page';

const routes: Routes = [
  {
    path: '',
    component: ClinboxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClinboxPageRoutingModule {}
