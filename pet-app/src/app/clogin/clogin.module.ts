import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CloginPageRoutingModule } from './clogin-routing.module';

import { CloginPage } from './clogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CloginPageRoutingModule
  ],
  declarations: [CloginPage]
})
export class CloginPageModule {}
