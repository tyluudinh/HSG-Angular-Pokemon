import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {LayoutModule} from './layout/layout.module';
import {CoreModule} from './core/core.module';
import {AppStoreModule} from './store/store.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // core modules
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // third modules
    BsDropdownModule.forRoot(),
    // app modules
    CoreModule,
    AppStoreModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
