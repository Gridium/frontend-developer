import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ApplyComponent } from './components/apply/apply.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '',  component: HomeComponent },
  { path: 'apply',  component: ApplyComponent },
  { path: 'thanks',  component: ThankYouComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}
