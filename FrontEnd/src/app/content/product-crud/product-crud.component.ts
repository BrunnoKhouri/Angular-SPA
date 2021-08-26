import { ProductCreateComponent } from './product-create/product-create.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.scss']
})
export class ProductCrudComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  navigateToProductCreate(): void{
    const dialogRef = this.dialog.open(ProductCreateComponent, {
      width: '700px'
      
    });
  }
}
