import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClinboxPageRoutingModule } from './clinbox-routing.module';

import { ClinboxPage } from './clinbox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClinboxPageRoutingModule
  ],
  declarations: [ClinboxPage]
})
export class ClinboxPageModule {}
