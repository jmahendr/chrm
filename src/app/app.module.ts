import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from "./app-material.modules";
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OfferComponent } from './offer/offer.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from "./app-routing/app-routing.module";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OfferComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
