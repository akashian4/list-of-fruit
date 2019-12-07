import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-details-product",
  templateUrl: "./details-product.component.html",
  styleUrls: ["./details-product.component.css"]
})
export class DetailsProductComponent implements OnInit, OnDestroy {
  counter: number;
  name: string;
  paramsSubscribtion: Subscription;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.name = this.route.snapshot.params["name"];
    this.counter = this.route.snapshot.params["counter"];
    this.paramsSubscribtion = this.route.params.subscribe((params: Params) => {
      (this.counter = params["counter"]), (this.name = params["name"]);
    });
  }
  ngOnDestroy() {
    this.paramsSubscribtion.unsubscribe();
  }
}
