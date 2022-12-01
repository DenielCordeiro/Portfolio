import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  urlToJson = 'assets/pt.json';
  result: any;

  constructor( public http: HttpClient ) {
    this.http.get<any>(this.urlToJson).subscribe(response => {
      this.result = response;
    });
   }

  ngOnInit(): void {
  }

}
