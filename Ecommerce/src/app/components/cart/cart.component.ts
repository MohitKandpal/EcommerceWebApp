import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  
  shoppingCart: any[] = [];
  constructor(private cartService: CartService) { }
  
  ngOnInit(): void {
    this.cartService.getCart().subscribe(data => {
      this.shoppingCart = data.map((x: { payload: { doc: { id: any; data: () => {}; }; }; }) => {
        return {
          id: x.payload.doc.id,
          ...x.payload.doc.data() as {}
        }
      });
    });
  }

  /**
   * Method to remove a product from cart
   * @param i : product index
   */
  removeFromCart(i: number) {
    this.cartService.removeFromCart(this.shoppingCart[i].id);
  }

  /**
   * Method to update quantity of a product in cart
   * @param i : product index
   */
  updateCart(i: number) {
    this.cartService.updateFromCart(this.shoppingCart[i].id, this.shoppingCart[i].amount)
  }
}
