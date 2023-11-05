import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Interface/products';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products: Product[] = [];
  constructor(private productService: ProductsService) { }
  
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data => {
      if(data && data.length > 0) {
        for(let i = 0; i < data.length; i++) {
          if(data[i].name && data[i].price && data[i].productPath) {
            this.products.push(new Product(data[i].name, data[i].price, data[i].productPath));
          }
        }
      }
    });
  }

  addToCart(i: number) {
    console.log(this.products[i]);
  }

}
