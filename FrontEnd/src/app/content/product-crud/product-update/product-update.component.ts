import { ProductCrudService } from './../product-crud.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../product-crud.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = new Product();

  constructor(
    private productService: ProductCrudService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogRef: MatDialogRef<ProductUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
  ) {
    this.product.id = this.data.id;
    this.product.name = this.data.name;
    this.product.price = this.data.price;
  }

  ngOnInit() {
    // this.product = this.data;
    //  const id = this.route.snapshot.paramMap.get('id');
    // this.productService.readById(id).subscribe(product => {
    //  this.product = product;
    //  });
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso!');
      this.router.navigate(["/samplestore"])
    });
  }

}
