import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-designs',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.sass']
})
export class DesignsComponent implements OnInit {
  urlToJson = 'assets/pt.json';
  result: any;

  constructor( public http: HttpClient) {
    this.http.get<any>(this.urlToJson).subscribe(response => {
      this.result = response;
    });
   }

  ngOnInit(): void {
  }

}
