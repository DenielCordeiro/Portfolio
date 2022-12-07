import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  form!: FormGroup;
  urlToJson = 'assets/pt.json';
  result: any;
  linkedin: string = 'https://www.linkedin.com/in/daniel-de-souza-cordeiro-020915198/';

  constructor(
    public http: HttpClient,
    public formBuilder: FormBuilder
  ) {
    this.http.get<any>(this.urlToJson).subscribe(response => {
      this.result = response;
    });
   }

  ngOnInit(): void {
    this.formBuilding();
  }

  formBuilding(): void {
    this.form = this.formBuilder.group({
      "name": [null, Validators.required],
      "email": [null, [Validators.required, Validators.email]],
      "message": [null, Validators.required]
    });
  }
}
