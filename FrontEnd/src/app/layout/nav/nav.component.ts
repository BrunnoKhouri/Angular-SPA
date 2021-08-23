import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavService } from '../services';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {



  constructor(
    public sidenavService: SidenavService
  ) { }

  ngOnInit() {
  }
  
  public onSideNavClick(): void {
    this.sidenavService.changeIsMenuOpened('right');
  }

  public get MenuOpened(): boolean {
    return this.sidenavService.isMenuOpenedRight;
  }
}
