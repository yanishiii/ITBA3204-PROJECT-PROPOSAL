import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppsitPageRoutingModule } from './appsit-routing.module';

import { AppsitPage } from './appsit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppsitPageRoutingModule
  ],
  declarations: [AppsitPage]
})
export class AppsitPageModule {}
