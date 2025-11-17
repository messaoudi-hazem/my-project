import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Home } from './home/home';
import { ListSuggestion } from './core/list-suggestion/list-suggestion';

@NgModule({
  declarations: [App, Header, Footer, Home, ListSuggestion],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [App],
})
export class AppModule {}
