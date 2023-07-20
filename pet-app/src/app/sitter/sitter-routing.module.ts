import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SitterPage } from './sitter.page';

const routes: Routes = [
  {
    path: '',
    component: SitterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SitterPageRoutingModule {}
