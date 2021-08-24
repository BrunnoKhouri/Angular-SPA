import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Router
import { HomeComponent } from './content/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
