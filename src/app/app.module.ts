import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { MenuComponent } from './shared/components/navigation/menu/menu.component';
import { FooterComponent } from './shared/components/navigation/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsService } from './services/products.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AnnouncementsComponent } from './shared/components/announcements/announcements.component';
import { WorkTeamComponent } from './shared/components/work-team/work-team.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    DeliveryComponent,
    MenuComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    ProductListComponent,
    AnnouncementsComponent,
    WorkTeamComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
