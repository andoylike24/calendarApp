import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { CalendarService } from '../../services/calendar.service';
import { calendarDetail } from 'src/app/models/calendar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subsRouteView: Subscription = new Subscription();
  routeView: string = "all";
  calendarDetail:calendarDetail | undefined;

  constructor(
    private http: HttpClient,
    private calendarService: CalendarService) {
  }

  ngOnInit(): void {
    this.obsGetRouteView();
  }

  ngOnDestroy() {
    this.subsRouteView.unsubscribe();
  }

  //observable get route view
  obsGetRouteView() {
    this.subsRouteView = this.calendarService.obsRouteView.subscribe(
      params => {
        if (params.isRoute == true && params.tag != "" ) {
          this.routeView = params.tag;
          this.calendarDetail = params.data;
        } else {
          this.routeView = "all";
        }
      });
  }



}
