import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  counter: number;
  constructor() {
    this.counter = 0;
  }

  Increment() {
    this.counter++;
    this.onIncrease.emit();
  }
  @Output() onIncrease:EventEmitter<any> = new EventEmitter<any>();
  Decrement() {
    if (this.counter != 0) {
      this.counter--;
      this.onDecrease.emit();
    }
  }
  @Output() onDecrease:EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() { }

}
