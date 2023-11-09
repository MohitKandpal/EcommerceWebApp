import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{
  
  @ViewChild('image') image: ElementRef | undefined;
  productsArr: any[] = [];
  constructor(private productService: ProductsService) { }
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.productsArr = data.map((x: { payload: { doc: { id: any; data: () => {}; }; }; }) => {
        return {
          id: x.payload.doc.id,
          ...x.payload.doc.data() as { }
        }
      });
    });
  }

  /**
   * Method to add product
   * @param f : Form Instance
   */
  addProduct(f: NgForm) {
    let name: string = f.value.name;
    let price: number = f.value.price;
    let image;
    if(this.image != null && this.image.nativeElement != null) {
      image = this.image.nativeElement.files[0];
    }
    this.productService.addNewProduct(name, price, image);
  }

  updateProductPrice(i: number) {
    this.productService.updateProductPrice(this.productsArr[i].id, this.productsArr[i].price);
  }

  deleteProduct(i: number) {
    this.productService.deleteProduct(this.productsArr[i].id);
  }
}
