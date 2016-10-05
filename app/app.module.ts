import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent }  from './heroes.component';
import { DashboardComponent} from './dashboard.component';
import {HeroService} from "./hero.service";
import {routing} from './app.routing';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroesComponent
    ],

    providers:[
      HeroService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
