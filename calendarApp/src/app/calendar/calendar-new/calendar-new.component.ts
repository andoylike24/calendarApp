import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { CalendarService } from '../../services/calendar.service';
import { calendarDetail } from 'src/app/models/calendar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-calendar-new',
  templateUrl: './calendar-new.component.html',
  styleUrls: ['./calendar-new.component.css']
})
export class CalendarNewComponent implements OnInit {
  title: string = "Create New";
  registerCalendarDetailForm: FormGroup;
  calendarDetail: calendarDetail;
  submitted: boolean;
  currentDate = new Date().toISOString().substring(0, 10);
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private calendarService: CalendarService,
  ) { }

  ngOnInit(): void {
    this.initRegisterCalendarDetailForm();
  }

  get f() { return this.registerCalendarDetailForm.controls; }
  initRegisterCalendarDetailForm() {
    this.registerCalendarDetailForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(6)]],
      date: [this.currentDate, Validators.required],
      status: ['pending', Validators.required],
    });
  }

  onRegisterCalendarDetail() {
    this.calendarDetail = {
      id:6,
      title: this.registerCalendarDetailForm.controls["title"].value,
      date: this.registerCalendarDetailForm.controls["date"].value,
      status: this.registerCalendarDetailForm.controls["status"].value,
    }

    if (this.registerCalendarDetailForm.invalid) {
      this.submitted = true;
    } else {
      this.submitted = false;
      console.log(this.calendarDetail);
      alert("https://my-json-server.typicode.com/ - Changes aren't persisted between call");
    }
  }


  resetForm() {
    this.registerCalendarDetailForm.reset();
  }

  registerCalendarDetail() {
  }

  backHome() {
    this.calendarService.routeView({ isRoute: true, tag: "all", data: null });
  }

}
