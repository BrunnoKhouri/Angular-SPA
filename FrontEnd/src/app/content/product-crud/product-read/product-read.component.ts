import { ProductCrudService } from './../product-crud.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product-crud.model';
import { ProductUpdateComponent } from '../product-update/product-update.component';
import { MatDialog } from '@angular/material';
import { ProductDeleteComponent } from '../product-delete/product-delete.component';

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
    this.tableLoading();
  }

  private tableLoading(): void{
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
    dialogRef.afterClosed().subscribe((mustUpdate) => {
      (mustUpdate)
      this.tableLoading();
    });
  }

  navigateToProductDelete(prodcutDelete: Product): void{
    const dialogRef = this.dialog.open(ProductDeleteComponent, {
      width: '800px',
      data: prodcutDelete
    });
    dialogRef.afterClosed().subscribe((mustUpdate) => {
      (mustUpdate)
      this.tableLoading();
    });
  }

}
