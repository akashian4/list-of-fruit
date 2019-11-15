import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { BrowserstorageService } from '../browserstorage.service';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css'],
  providers: [BrowserstorageService]
})
export class IncrementComponent implements OnInit {
  link = new FormControl('', [Validators.required]);
  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20)
  ]);
  list_form: FormGroup = this.builder.group({
    link: this.link,
    name: this.name
  });

  constructor(
    private builder: FormBuilder,
    private browserStorage: BrowserstorageService
  ) {}

  save() {
    this.browserStorage.setLocal('list_item', {
      link: this.list_form.value.link,
      name: this.list_form.value.name,
      counter: 0
    });

    // this.CountComponent.data.push({
    //   link: this.list_form.value.link,
    //   name: this.list_form.value.name,
    //   counter: 0
    // });
  }

  ngOnInit() {}
}
