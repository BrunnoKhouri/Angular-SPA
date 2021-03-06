import { HeaderService } from './header.service';
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
    public sidenavService: SidenavService,
    private headerService: HeaderService
  ) { }

  ngOnInit() {
  }

  get title(): string{
    return this.headerService.headeData.title
  }

  get icon(): string{
    return this.headerService.headeData.icon
  }

  get routeUrl(): string{
    return this.headerService.headeData.routeUrl
  }

  public onSideNavClick(): void {
    this.sidenavService.changeIsMenuOpened('right');
  }
  public onSideNavClickLeft(): void {
    this.sidenavService.changeIsMenuOpened('left');
  }

  toggleModal() {    
    var win = window.open("https://www.linkedin.com/in/william-okubo-08ba43185/", '_blank');
    win.focus();
  }

}
