import { Component } from '@angular/core';
import { Slide } from '../slide/slide';
import { ProductCard } from '../product-card/product-card';
import { CartService } from '../service/cart-service';
import { ProductService } from '../service/product-service';

@Component({
  selector: 'app-home',
  imports: [ Slide,
            ProductCard,],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home { 
  constructor(public cartService:CartService,public productService:ProductService){}
  //  ngOnInit(){
  //   let cart:any = localStorage.getItem('cart_item') ?? '[]';
  //   this.cart_item = JSON.parse(cart);
  // }
  protected title = 'lab4';
   cart_item :any[]=[];


  addToCart(product:any){
    this.cartService.addToCart(product);
    

  }


 

}
