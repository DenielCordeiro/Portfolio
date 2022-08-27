import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  eletricalSuplyStoreGit: string = 'https://github.com/DenielCordeiro/Eletrical-supply-store';
  homePageInstagramGit: string = 'https://github.com/DenielCordeiro/home-page-Instagram';
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
