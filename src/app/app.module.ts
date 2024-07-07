import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { PresentesComponent } from './pages/presentes/presentes.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PresencaComponent } from './pages/presenca/presenca.component';
import { CardPresenteComponent } from './componentes/card-presente/card-presente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    PresentesComponent,
    InicioComponent,
    PresencaComponent,
    CardPresenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
