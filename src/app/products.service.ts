import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public product_api:string ="https://dummyjson.com/products";

  constructor( public httpClient :HttpClient) { }

  getProductsApi(){

    return this.httpClient.get(this.product_api)
  }

}
