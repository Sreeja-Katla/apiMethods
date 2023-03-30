import { Component, OnInit } from '@angular/core';
import { ProductsService } from "./products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularApi';
  public productsData:any;


constructor( public service :ProductsService){

}
  ngOnInit(): void {
    this.service.getProductsApi().subscribe((response:any) =>{

  console.log(response);
this.productsData = response.products;
console.log(" products array is...",this.productsData);

})

  }



}
