import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.sass']
})
export class TimeLineComponent implements OnInit {
  urlToJson: string = 'assets/pt.json';
  result: any;

  constructor(public http: HttpClient) {
    this.http.get<any>(this.urlToJson).subscribe(response => {
      this.result = response;
    })
  }

  ngOnInit(): void {
  }

}
