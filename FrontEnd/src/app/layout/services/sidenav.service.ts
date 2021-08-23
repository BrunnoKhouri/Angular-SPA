import { Injectable, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class  SidenavService
{

  @Output()
  public isMenuOpenedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  public hideSideNavMenus: EventEmitter<boolean> = new EventEmitter<boolean>();
  public showNavHeaderEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private _router : Router){}
    public isMenuOpenedRight: boolean = false;
    public isMenuOpenedLeft: boolean = false;


    public changeIsMenuOpened(sidenav:string) : void
    {
      if(sidenav == 'right'){
        this.isMenuOpenedRight = !this.isMenuOpenedRight;
        this.isMenuOpenedEvent.emit(this.isMenuOpenedRight);
      }
      else if(sidenav == 'left' ){
        this.isMenuOpenedLeft = !this.isMenuOpenedLeft;
        this.isMenuOpenedEvent.emit(this.isMenuOpenedLeft);
        }
    }

    public hideSideNavMenu(){
      this.hideSideNavMenus.emit(true);
    }
  
    public showSideNavMenu() {
      this.hideSideNavMenus.emit(false);
  }

     public hideNavHeader() {
       this.showNavHeaderEvent.emit(true);
  }
     public showNavHeader() {
        this.showNavHeaderEvent.emit(false);
  } 

    public actualUrl(): string{
        var route = this._router.url.split('/')[1];
        if (route.indexOf('?') > -1)
           route = route.substr(0, route.indexOf('?'));
        return route;
    }
}
