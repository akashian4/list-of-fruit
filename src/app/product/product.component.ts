import { Component, OnInit, ViewChild } from '@angular/core';
import { CountComponent } from '../components/count/count.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  countAll: number = 0;
  @ViewChild(CountComponent, { static: false }) CountComponent: CountComponent;
  constructor() { }

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
  
  ngOnInit() {
  }
  onLoad($event){
    console.log(event);
  }
}
