import { Component, OnInit } from '@angular/core';
import { SidenavService } from './layout/services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public showSideNav: boolean = true;
  public showHeaderNav: boolean = true;

  constructor(
    public sidenavService: SidenavService,
  ) { }

  public onBackdropClick(): void {
    this.sidenavService.isMenuOpenedRight = false;
    this.sidenavService.isMenuOpenedLeft = false;
  }
  ngOnInit() {

  }
  ngAfterViewInit(): void {
    this.sidenavService.hideSideNavMenus.subscribe(value => {
      this.showSideNav = !value;
    });
    this.sidenavService.showNavHeaderEvent.subscribe(value => {
      this.showHeaderNav = !value;
    });
  }
}
