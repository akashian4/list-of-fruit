import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  counter: number;
  name:string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    this.counter = this.route.snapshot.params['counter'];
    this.route.params.subscribe(
      (params: Params) =>{
          this.counter= params['counter'],
          this.name = params['name']
  });
  }
}
