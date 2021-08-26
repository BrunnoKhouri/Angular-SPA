import { ProductCrudService } from './../product-crud.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product-crud.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: "",
    price: null
  }

  constructor(private productCrudService: ProductCrudService, private router: Router) { }

  ngOnInit() {
  }

  createProduct(): void {
    this.productCrudService.create(this.product).subscribe(() => {
      this.productCrudService.showMessage('Produto criado !!')
  
    })
  }
  
  cancelProduct(): void{
   this.router.navigate(['samplestore'])
  }

}
