import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../layout/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private headerService: HeaderService) {
    headerService.headeData = {
      title: 'Home',
      icon: 'home',
      routeUrl: 'home'
    }
    }

  ngOnInit() {
  }
  public actualUrl(): void{
    this.router.navigate(['angular']);
}
}
