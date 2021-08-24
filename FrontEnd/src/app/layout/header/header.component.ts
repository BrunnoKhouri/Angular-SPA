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
  isActive = true;

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

  toggleModal() {
    //this.eventClickModal.emit();
    var win = window.open("https://www.linkedin.com/in/brunno-khouri-delpin-borges-a808621b9/", '_blank');
    win.focus();
  }

}
