import { Component, OnInit } from '@angular/core';
import { products } from '../products'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public allProducts = products;

  paymentSuccess(res) {
    console.log("Payment successfull")
    // On a real app, we must first perform validation on the server by sending a request to rave to verify the transaction before anything else
    // this.serverService.verifyTransaction(res)
}

paymentFailure(){
    // Handle payment failure
}


  constructor() { }

  ngOnInit() {
  }

}
