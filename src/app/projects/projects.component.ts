import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import  projectsData  from '../data/data-projects/projects'
import { ProjectModel } from '../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  urlToJson = 'assets/pt.json';
  result: any;

  projects: ProjectModel[] = projectsData;

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
    console.log(this.projects);
  }

}
