import { ProductCrudService } from './../product-crud.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product-crud.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit {

  products: Product[];

  constructor(private productCrudService: ProductCrudService) { }

  ngOnInit() {
    this.productCrudService.read().subscribe(products => {
      this.products = products;
      console.log(products)
   })
  }

}
