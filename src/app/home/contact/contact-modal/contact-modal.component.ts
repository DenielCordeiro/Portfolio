import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.sass']
})
export class ContactModalComponent implements OnInit {
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
