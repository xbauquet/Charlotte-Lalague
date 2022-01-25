import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './home/services/services.component';
import { MeComponent } from './home/me/me.component';
import { AboutComponent } from './home/about/about.component';
import { ServiceCardComponent } from './home/services/service-card/service-card.component';
import { OpenSourceComponent } from './open-source/open-source.component';
import { ServiceCardAltComponent } from './home/services/service-card-alt/service-card-alt.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    MeComponent,
    AboutComponent,
    ServiceCardComponent,
    OpenSourceComponent,
    ServiceCardAltComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
