import { Component, ViewChild } from '@angular/core';
import {
  Validators,
  FormGroup,
  FormControl,
  FormBuilder
} from '@angular/forms';
import { CountComponent } from './components/count/count.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(CountComponent, { static: false }) CountComponent: CountComponent;
  countAll: number = 0;

  link = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  list_form: FormGroup = this.builder.group({
    link: this.link,
    name: this.name
  });

  constructor(private builder: FormBuilder) {}

  productCountIncreased() {
    this.countAll++;
  }
  productCountDecreased() {
    if (this.countAll != 0) {
      this.countAll--;
    }
  }
  onchangecount(value: number) {
    this.countAll -= value;
  }

  save() {
    // data:any[];
    // data.push({
    //   link: this.list_form.value.link,
    //   name: this.list_form.value.name,
    //   counter:0
    // });
    this.CountComponent.data.push({
      link: this.list_form.value.link,
      name: this.list_form.value.name,
      counter: 0
    });
  }
}
