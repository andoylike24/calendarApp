import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarAllComponent } from './calendar/calendar-all/calendar-all.component';
import { CalendarNewComponent } from './calendar/calendar-new/calendar-new.component';
import { CalendarDetailsComponent } from './calendar/calendar-details/calendar-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CalendarAllComponent,
    CalendarNewComponent,
    CalendarDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
