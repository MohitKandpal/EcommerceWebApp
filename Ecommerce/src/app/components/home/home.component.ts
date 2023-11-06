import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Interface/products';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products: Product[] = [];
  add: number = -1;
  constructor(private productService: ProductsService, private cart: CartService) { }
  
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.products = [];
      if(data && data.length > 0) {
        for(let i = 0; i < data.length; i++) {
          if(data[i].name && data[i].price && data[i].productPath) {
            this.products.push(new Product(data[i].name, data[i].price, data[i].productPath));
          }
        }
      }
    });
  }

  /**
   * Method to add product to cart
   * @param i : index of product
   */
  addToCart(i: number) {
    this.add = +i;
  }

  /**
   * Method to buy the product
   * @param amount : Quantity of product
   */
  buy(amount: string){
    let selectedProduct: Product = this.products[this.add];
    let data = {
      name: selectedProduct.name,
      price: selectedProduct.price,
      amount: +amount
    }
    this.cart.addToCart(data).then(data => {
      this.add = -1;
    }).catch(err => console.log(err));
  }

}
