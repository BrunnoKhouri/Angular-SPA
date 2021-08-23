import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { NavComponent } from '../nav/nav.component';
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = NavComponent;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  constructor(
    public sidenavService: SidenavService
  ) { }

  ngOnInit() {
  }

  public onSideNavClick(): void {
    this.sidenavService.changeIsMenuOpened('right');
  }
  public onSideNavClickLeft(): void {
    this.sidenavService.changeIsMenuOpened('left');
  }

}
