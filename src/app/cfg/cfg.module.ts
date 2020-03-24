import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CfgRoutingModule } from './cfg-routing.module';
import { CfgListComponent } from './cfg-list/cfg-list.component';
import { CfgDetailComponent } from './cfg-detail/cfg-detail.component';
import { CfgFormComponent } from './cfg-form/cfg-form.component';
import { CfgService } from '../service/cfg.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [CfgListComponent, CfgDetailComponent, CfgFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CfgRoutingModule
  ],
  providers: [CfgService]
})
export class CfgModule { }
