import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit {
  link = new FormControl('', [
    Validators.required,
    Validators.min(3),
    Validators.max(20)
  ]);
  name = new FormControl('', [
    Validators.required,
    Validators.min(3),
    Validators.max(20)
  ]);
  list_form: FormGroup = this.builder.group({
    link: this.link,
    name: this.name
  });

  constructor(private builder: FormBuilder) {}

  save() {
    // this.CountComponent.data.push({
    //   link: this.list_form.value.link,
    //   name: this.list_form.value.name,
    //   counter: 0
    // });
  }

  ngOnInit() {}
}
