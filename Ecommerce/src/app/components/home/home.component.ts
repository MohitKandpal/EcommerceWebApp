import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Interface/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products: Product[] = [];
  constructor() { }
  
  ngOnInit(): void {
    this.products.push(new Product("Banana", 3, "Fruit", "assets/Pictures/banana.png"));
    this.products.push(new Product("Kiwi", 10, "Fruit", "assets/Pictures/kiwi.png"));
    this.products.push(new Product("Orange", 7, "Fruit", "assets/Pictures/orange.png"));
    this.products.push(new Product("Strawberry", 20, "Fruit", "assets/Pictures/strawberry.png"));
  }

  addToCart(i: number) {
    console.log(this.products[i]);
  }

}
