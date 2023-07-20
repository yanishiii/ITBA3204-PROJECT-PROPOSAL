import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProyaniPageRoutingModule } from './proyani-routing.module';

import { ProyaniPage } from './proyani.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProyaniPageRoutingModule
  ],
  declarations: [ProyaniPage]
})
export class ProyaniPageModule {}
