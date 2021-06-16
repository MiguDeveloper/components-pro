import { TestObservablesComponent } from './testing/test-observables/test-observables.component';
import { TestNgContentComponent } from './testing/test-ng-content/test-ng-content.component';
import { TestEnumsComponent } from './testing/test-enums/test-enums.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContadorComponent } from './components/contador/contador.component';
import { BehaviorsubjectComponent } from './testing/behaviorsubject/behaviorsubject.component';

const routes: Routes = [
  { path: 'enums-example', component: TestEnumsComponent },
  { path: 'timer', component: ContadorComponent },
  { path: 'ng-content-example', component: TestNgContentComponent },
  { path: 'test-observable', component: TestObservablesComponent },
  { path: 'test-timer', component: BehaviorsubjectComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'enums-example' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
