import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoinsComponent } from './coins/coins.component';
import { CoinsModalComponent } from './coins/coins-modal/coins-modal.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FilterCoinsPipe } from './pipes/filter-coins.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoinsComponent,
    CoinsModalComponent,
    HeaderComponent,
    FilterCoinsPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
