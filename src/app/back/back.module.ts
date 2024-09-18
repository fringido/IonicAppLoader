import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackRoutingModule } from './back-routing.module';
import { BackComponent } from './back/back.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [BackComponent],
  imports: [
    CommonModule,
    IonicModule,
    BackRoutingModule
  ]
})
export class BackModule { }
