import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { CalendarService } from '../../services/calendar.service';
import { calendarDetail } from 'src/app/models/calendar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calendar-details',
  templateUrl: './calendar-details.component.html',
  styleUrls: ['./calendar-details.component.css']
})
export class CalendarDetailsComponent implements OnInit {

  title: string = "title";
  @Input('calendarDetail') public calendarDetail:any;
  registerCalendarDetailForm: FormGroup;
  submitted: boolean;
  updatedCalendarDetail: calendarDetail;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private calendarService: CalendarService,) {
  }

  ngOnInit(): void {
    this.title = this.calendarDetail?.title;
    this.initRegisterCalendarDetailForm();
  }

  get f() { return this.registerCalendarDetailForm.controls; }
  initRegisterCalendarDetailForm() {

    this.calendarDetail.date = new Date().toISOString().substring(0, 10);

    this.registerCalendarDetailForm = this.formBuilder.group({
      title: [this.calendarDetail?.title, [Validators.required, Validators.minLength(6)]],
      date: [this.calendarDetail?.date, Validators.required],
      status: [this.calendarDetail?.status, Validators.required],
    });
  }

  onUpdateCalendarDetail() {
    this.updatedCalendarDetail = {
      id: 5,
      title: this.registerCalendarDetailForm.controls["title"].value,
      date: this.registerCalendarDetailForm.controls["date"].value,
      status: this.registerCalendarDetailForm.controls["status"].value,
    }

    if (this.registerCalendarDetailForm.invalid) {
      this.submitted = true;
    } else {
      this.submitted = false;
      alert("https://my-json-server.typicode.com/ - Changes aren't persisted between call");
      console.log(this.updatedCalendarDetail);
    }
  }


  resetForm() {
    this.registerCalendarDetailForm.reset();
  }

  backHome() {
    this.calendarService.routeView({ isRoute: true, tag: "all", data: null });
  }

  deleteDetail() {
    alert("https://my-json-server.typicode.com/ - Changes aren't persisted between call");
  }

}
