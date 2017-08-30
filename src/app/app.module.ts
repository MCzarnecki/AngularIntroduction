import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PeopleModule } from './features/people/people.module';
import { RouterModule } from '@angular/router';
import { ItemsModule } from './features/items/items.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    RouterModule,
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule,
    PeopleModule,
    ItemsModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
