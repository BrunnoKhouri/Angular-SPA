import { ProductCreateComponent } from './content/product-crud/product-create/product-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Router
import { HomeComponent } from './content/home/home.component';
import { AboutAngularComponent } from './content/home/about-angular/about-angular.component';
import { ProductCrudComponent } from './content/product-crud/product-crud.component';
import { ProductUpdateComponent } from './content/product-crud/product-update/product-update.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'samplestore', component: ProductCrudComponent },
  { path: 'samplestore/update/:id', component: ProductUpdateComponent },
  { path: 'angular', component: AboutAngularComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
