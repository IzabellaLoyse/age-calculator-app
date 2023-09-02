import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, LayoutComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
