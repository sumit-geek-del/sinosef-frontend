import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ongoing',
  templateUrl: './ongoing.component.html',
  styleUrls: ['./ongoing.component.scss']
})
export class OngoingComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  routeToContact(){
    this._router.navigate(['contact'], {skipLocationChange:true})
  }

}
