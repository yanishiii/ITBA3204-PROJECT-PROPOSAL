import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CloginPage } from './clogin.page';

const routes: Routes = [
  {
    path: '',
    component: CloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CloginPageRoutingModule {}
