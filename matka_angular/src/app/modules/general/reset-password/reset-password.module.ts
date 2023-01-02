import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MaterialModule} from '../../../core/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {NgSelectModule} from '@ng-select/ng-select';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {MatSelectModule} from '@angular/material/select';
import {ResetPasswordComponent} from '../../../pages/reset-password/reset-password.component';


@NgModule({
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
    MatTabsModule,
    MaterialModule,
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSortModule,
    MatSelectModule,
    MatIconModule,
    NgSelectModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ],
  declarations: [
    ResetPasswordComponent
  ],
  exports: [
    ResetPasswordComponent
  ]
})
export class ResetPasswordModule { }
