import { Component, OnInit } from '@angular/core';
import { PageTitleComponent } from './../page-title/page-title.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  pageTitle = "Skontaktuj się!";

  constructor() { }

  ngOnInit() {
  }

   log(x){
    console.log(x);
  }


  submit(form){
    console.log(form);
  }

  sendForm(imie){
    alert("Dzięki "+imie+"! Twoja wiadomośc została wysłana.");

  }

}
