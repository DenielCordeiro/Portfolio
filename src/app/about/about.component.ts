import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
  standalone: false
})
export class AboutComponent implements OnInit {
  urlToJson = 'assets/pt.json';
  result: any;

  constructor(public http: HttpClient) {
    this.http.get<any>(this.urlToJson).subscribe(response => {
      this.result = response;
    });
  }

  ngOnInit(): void {
  }

}
