import { BrowserModule } from '@angular/platform-browser';
import { CardDataService } from './card-data.service';
import { CarouselModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent} from './card/card.component';
import { HomeComponent } from './home/home.component';
import { NavbarHeaderComponent } from './navbar-header/navbar-header.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    NavbarHeaderComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  providers: [CardDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
