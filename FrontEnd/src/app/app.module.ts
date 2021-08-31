import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { ProductCrudComponent } from './content/product-crud/product-crud.component';
import { ProductCreateComponent } from './content/product-crud/product-create/product-create.component';
import { VideoDialogComponent } from './content/home/about-angular/video-dialog/video-dialog.component';
import { HomeComponent } from './content/home/home.component';
import { AboutAngularComponent } from './content/home/about-angular/about-angular.component';
import { FormsModule } from '@angular/forms';
import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';

//Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { NavComponent } from './layout/nav/nav.component'
import { MatListModule, MatSidenavModule, MatSnackBarModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatButtonModule} from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductReadComponent } from './content/product-crud/product-read/product-read.component';
import { ProductUpdateComponent } from './content/product-crud/product-update/product-update.component';

import {  MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,    
    NavComponent, HomeComponent, AboutAngularComponent, VideoDialogComponent, ProductCrudComponent, ProductCreateComponent, ProductReadComponent, ProductUpdateComponent
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 

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
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule 
    
     
  ],  
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR',
  }],
  entryComponents: [
    VideoDialogComponent, ProductCreateComponent, ProductUpdateComponent    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
