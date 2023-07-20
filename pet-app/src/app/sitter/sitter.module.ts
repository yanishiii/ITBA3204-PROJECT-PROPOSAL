import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SitterPageRoutingModule } from './sitter-routing.module';

import { SitterPage } from './sitter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SitterPageRoutingModule
  ],
  declarations: [SitterPage]
})
export class SitterPageModule {}
