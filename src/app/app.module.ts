import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/navigation/home/home.component';
import { MenuComponent } from './components/navigation/menu/menu.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { ContactComponent } from './components/institutional/contact/contact.component';
import { AboutComponent } from './components/institutional/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
