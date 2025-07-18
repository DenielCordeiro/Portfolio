import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
  standalone: false
})
export class ContactComponent implements OnInit {
  form!: FormGroup;
  urlToJson = 'assets/pt.json';
  result: any;
  whatssapp: string = '(11) 94441-1654';
  numberCell: string = 'https://api.whatsapp.com/send?phone=5511944411654';
  Instagram: string = 'https://www.instagram.com/deniel_leined/';
  gmail: string = 'dcordeiro962@gmail.com';
  email: string = 'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwQLwLHHclqBLdzrsRVnkzFFftNjrCjSlXjSrsZndWSszHKWLpmbMWVfKCDkNVmjlLkfFFB';
  linkedin: string = 'https://www.linkedin.com/in/daniel-de-souza-cordeiro-dev';

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
