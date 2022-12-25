import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss']
})
export class HeaderNavbarComponent implements OnInit {

  constructor(private _router:Router, private _route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  routeToComponent(path:string){

    this._router.navigate([path], {skipLocationChange:true});
  }

}
