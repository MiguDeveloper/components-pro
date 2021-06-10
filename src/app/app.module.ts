import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component';
import { DisplayComponent } from './components/display/display.component';
import { TestEnumsComponent } from './testing/test-enums/test-enums.component';
import { ContadorComponent } from './components/contador/contador.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    DisplayComponent,
    TestEnumsComponent,
    ContadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
