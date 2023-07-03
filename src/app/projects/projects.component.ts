import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  projectSelected: ProjectModel[] = [];
  modalOpen: boolean = false;

  constructor(public http: HttpClient) {
    this.http.get<any>(this.urlToJson).subscribe(response => {
      this.result = response;
    });
  }

  ngOnInit(): void {}

  openModal(project: Object) {
    const modal: HTMLDialogElement | null = document.querySelector('#productModal');
    if(this.modalOpen === true) {
      this.projectSelected = [];
    }

    if (modal !== null) {
      this.projectSelected?.push(project);
      modal.showModal();
      this.modalOpen = true;
    } else {
      alert("[error]: modal está vindo nulo");
    }
  }

  closeModal() {
    const modal: HTMLDialogElement | null = document.querySelector('#productModal');

    if (modal !== null) {
      this.modalOpen
      this.projectSelected = [];
      this.modalOpen = false;
      modal.close();
    } else {
      alert("[error]: modal está vindo nulo");
    }
  }
}
