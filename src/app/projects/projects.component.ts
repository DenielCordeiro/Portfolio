import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  electricalSuplyStoreGit: string = 'https://github.com/DenielCordeiro/Eletrical-supply-store';
  homePageInstagramGit: string = 'https://github.com/DenielCordeiro/home-page-Instagram';
  moviesGit: string = 'https://github.com/DenielCordeiro/videosApp'
  urlToJson = 'assets/pt.json';
  result: any;

  constructor(
    public http: HttpClient,
    public config: NgbCarouselConfig
    ) {
    this.http.get<any>(this.urlToJson).subscribe(response => {
      this.result = response;
    });

    config.interval = 7000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

}
