import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { RoutingModule } from './routing.module';
import { CamelToHumanPipe } from './pipes/camel.pipe';

import { ApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CamelToHumanPipe
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
