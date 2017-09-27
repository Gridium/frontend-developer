import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ApplyComponent } from './components/apply/apply.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

import { RoutingModule } from './routing.module';

import { CamelToHumanPipe } from './pipes/camel.pipe';
import { FoShoPipe } from './pipes/fosho.pipe';
import { MilliToDatePipe } from './pipes/date.pipe';
import { KeysPipe } from './pipes/keyval.pipe';

import { ApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApplyComponent,
    ThankYouComponent,
    CamelToHumanPipe,
    FoShoPipe,
    MilliToDatePipe,
    KeysPipe,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  entryComponents: [],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
