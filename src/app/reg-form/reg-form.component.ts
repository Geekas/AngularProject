import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    alert("Your data are correct and sended! You can check in console");
  }
}
