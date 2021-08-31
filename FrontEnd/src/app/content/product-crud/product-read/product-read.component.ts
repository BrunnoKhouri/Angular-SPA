import { ProductCrudService } from './../product-crud.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product-crud.model';
import { ProductUpdateComponent } from '../product-update/product-update.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit {

  products: Product[];
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productCrudService: ProductCrudService, private dialog: MatDialog) { }

  ngOnInit() {
    this.productCrudService.read().subscribe(products => {
      this.products = products;
      console.log(products)
   })
  }

  navigateToProductUpdate(productsUpdate: Product): void{
    const dialogRef = this.dialog.open(ProductUpdateComponent, {
      width: '700px',
      data: productsUpdate
    });
  }

}
