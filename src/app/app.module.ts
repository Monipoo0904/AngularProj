import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewpageComponent } from './new-page';
import { FirstComponent } from './first/first.component';

@NgModule({
  declarations: [
    AppComponent,
    NewpageComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
