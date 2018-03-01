import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from "./app-material.modules";
import { FlexLayoutModule } from '@angular/flex-layout';
import { RestangularModule, Restangular } from "ngx-restangular";
import { RestangularConfigFactory } from "./shared/restConfig";
import { baseurl, serverurl } from "./shared/baseurl";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OfferComponent } from './offer/offer.component';
import { HomeComponent } from './home/home.component';
import { OfferService } from "./services/offer.service";

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
    BrowserAnimationsModule,
    AppMaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [
    OfferService,
    {provide : 'BaseURL', useValue: baseurl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
