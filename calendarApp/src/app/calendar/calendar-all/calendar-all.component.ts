import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { CalendarService } from '../../services/calendar.service';
import { calendarDetail } from 'src/app/models/calendar';

@Component({
  selector: 'app-calendar-all',
  templateUrl: './calendar-all.component.html',
  styleUrls: ['./calendar-all.component.css']
})
export class CalendarAllComponent implements OnInit {

  calendarList: calendarDetail[] = [];

  constructor(
    private http: HttpClient,
    private calendarService: CalendarService,
  ) { }

  ngOnInit(): void {
    this.initGetAllCalendar();
  }

  //get all calendars list
  initGetAllCalendar(){
    this.calendarService.getAllCalendarDetails().subscribe(
      res=>{
        this.calendarList = res;
      },error=>{
        console.log(error);
      }
    );
  }

  getDetail(i: calendarDetail) {
    this.calendarService.routeView({ isRoute: true, tag: "detail", data: i });
  }
  addNew() {
    this.calendarService.routeView({ isRoute: true, tag:"new",data:null});
  }

  newData(){
    let d:calendarDetail = {
      id:3,
      title:"yes",
      date: "2012-04-23T18:25:43.511Z",
      status: "pending"
    }

    this.calendarService.newCalendarDetail(d).subscribe(
      res=>{
        console.log(res);
      },error=>{
        console.log(error);
      }
    );
  }

}
