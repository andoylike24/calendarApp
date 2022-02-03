import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarAllComponent } from './calendar/calendar-all/calendar-all.component';
import { CalendarNewComponent } from './calendar/calendar-new/calendar-new.component';
import { CalendarDetailsComponent } from './calendar/calendar-details/calendar-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//services
import { CalendarService } from './services/calendar.service';
import { HomeComponent } from './home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarAllComponent,
    CalendarNewComponent,
    CalendarDetailsComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },

    ]),
  ],
  providers: [
    CalendarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
