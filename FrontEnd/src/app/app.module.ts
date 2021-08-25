import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { ProductCrudComponent } from './content/product-crud/product-crud.component';
import { ProductCreateComponent } from './content/product-crud/product-create/product-create.component';
import { VideoDialogComponent } from './content/home/about-angular/video-dialog/video-dialog.component';
import { HomeComponent } from './content/home/home.component';
import { AboutAngularComponent } from './content/home/about-angular/about-angular.component';

//Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { NavComponent } from './layout/nav/nav.component'
import { MatListModule, MatSidenavModule, MatSnackBarModule } from '@angular/material';
import { MatButtonModule} from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,    
    NavComponent, HomeComponent, AboutAngularComponent, VideoDialogComponent, ProductCrudComponent, ProductCreateComponent
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //Angular Material
    MatSnackBarModule,   
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatRadioModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    
     
  ],  
  providers: [],
  entryComponents: [
    VideoDialogComponent    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
