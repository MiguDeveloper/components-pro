import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component';
import { DisplayComponent } from './components/display/display.component';
import { TestEnumsComponent } from './testing/test-enums/test-enums.component';
import { ContadorComponent } from './components/contador/contador.component';
import { TestNgContentComponent } from './testing/test-ng-content/test-ng-content.component';
import { MensajeComponent } from './testing/test-ng-content/mensaje/mensaje.component';
import { TestObservablesComponent } from './testing/test-observables/test-observables.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    DisplayComponent,
    TestEnumsComponent,
    ContadorComponent,
    TestNgContentComponent,
    MensajeComponent,
    TestObservablesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
