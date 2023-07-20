import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppsitPage } from './appsit.page';

const routes: Routes = [
  {
    path: '',
    component: AppsitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppsitPageRoutingModule {}
