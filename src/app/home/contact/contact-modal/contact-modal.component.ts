import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.sass']
})
export class ContactModalComponent implements OnInit {
  form!: FormGroup;
  urlToJson = 'assets/pt.json';
  result: any;

  constructor(
    public http: HttpClient,
    public formBuilder: FormBuilder
  ) {
    this.http.get<any>(this.urlToJson).subscribe(response => {
      this.result = response;
    });
   }

  ngOnInit(): void {
    // alert()
    this.formBuilding()
  }

  formBuilding(): void {
    this.form = this.formBuilder.group({
      "name": [null, Validators.required],
      "email": [null, [Validators.required, Validators.email]],
      "message": [null, Validators.required]
    });
  }

}
