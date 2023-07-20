import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConyaniPageRoutingModule } from './conyani-routing.module';

import { ConyaniPage } from './conyani.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConyaniPageRoutingModule
  ],
  declarations: [ConyaniPage]
})
export class ConyaniPageModule {}
