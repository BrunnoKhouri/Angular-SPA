import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { VideoDialogComponent } from './video-dialog/video-dialog.component';

@Component({
  selector: 'app-about-angular',
  templateUrl: './about-angular.component.html',
  styleUrls: ['./about-angular.component.scss']
})
export class AboutAngularComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  
  public openVideoDialog(): void {
    const dialogRef = this.dialog.open(VideoDialogComponent, {
    });   

  }
}
