import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { RouteViewParams } from '../models/calendar';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  public url: string;

  routeViewParams = {   //sidebar params
    isRoute: false,
    tag: "",
    data:null,
  }

  constructor(
    private http: HttpClient,
  ) {
    this.url = "https://my-json-server.typicode.com/andoylike24/calendarApp";
  }

  //get all calendars details
  getAllCalendarDetails(): Observable<any> {
    return this.http.get(this.url + "/calendar/");
  }
  //get calendar detail
  getCalendarDetailById(id: number): Observable<any> {
    return this.http.get(this.url + "/calendar/" + id);
  }
  //add new calendar detail
  newCalendarDetail(data: any): Observable<any> {
    return this.http.post(this.url + "/calendar", data);
  }

  //Subject Routing view
  private subjRouteView = new BehaviorSubject<RouteViewParams>(this.routeViewParams);
  obsRouteView = this.subjRouteView.asObservable();
  routeView(params:any) {
    this.subjRouteView.next(params);
  }

}
