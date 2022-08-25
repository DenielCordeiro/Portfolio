import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  eletricalSuplyStoreGit: string = 'https://github.com/DenielCordeiro/Eletrical-supply-store';
  homePageInstagramGit: string = 'https://github.com/DenielCordeiro/home-page-Instagram';

  constructor() { }

  ngOnInit(): void {
  }

}
