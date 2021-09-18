import { ProductCrudService } from './../product-crud.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../product-crud.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private productService: ProductCrudService,
    private dialogRef: MatDialogRef<ProductDeleteComponent>,
  ) { }

  ngOnInit() {
  }

  deleteProduct(): void{
    this.productService.delete(`${this.data.id}`).subscribe(() => {
      this.productService.showMessage('Produto excluido com sucesso!');
    });
  }

}
