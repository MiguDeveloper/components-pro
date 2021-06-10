import { TestEnumsComponent } from './testing/test-enums/test-enums.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContadorComponent } from './components/contador/contador.component';

const routes: Routes = [
  { path: 'enums-example', component: TestEnumsComponent },
  { path: 'timer', component: ContadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'enums-example' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
