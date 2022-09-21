import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tecnology',
  templateUrl: './tecnology.component.html',
  styleUrls: ['./tecnology.component.sass']
})
export class TecnologyComponent implements OnInit {
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
