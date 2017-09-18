import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Rutas
import { APP_ROUTING } from './app.routes';

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { DevelopmentComponent } from './components/development/development.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppMovilComponent } from './components/app-movil/app-movil.component';
import { AwsComponent } from './components/aws/aws.component';
import { IntelligenceComponent } from './components/intelligence/intelligence.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { IotComponent } from './components/iot/iot.component';
import { DomoticaComponent } from './components/domotica/domotica.component';
import { ErrorsComponent } from './components/errors/errors.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    DevelopmentComponent,
    ContactComponent,
    AppMovilComponent,
    AwsComponent,
    IntelligenceComponent,
    DomseguroPipe,
    IotComponent,
    DomoticaComponent,
    ErrorsComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
