import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { LayoutComponent } from './layout.component';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {HomepageEffect} from '../store/effects/homepage.effect';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    EffectsModule.forFeature([
      HomepageEffect,
    ])
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
