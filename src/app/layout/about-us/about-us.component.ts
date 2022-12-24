import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  @ViewChild('rightStrips') rightStrips!:ElementRef;
  @ViewChild('leftCircle') leftCircle!:ElementRef;

  constructor(private _render:Renderer2) { }

  ngOnInit(): void {
    Aos.init();
  }

  ngAfterViewInit(){
    
  }

  lightBulbs():void{
    this._render.addClass(this.rightStrips.nativeElement, 'bulb_img');
    this._render.addClass(this.leftCircle.nativeElement,'bulb_img')
  }

  switchOffBulbs():void{
    this._render.removeClass(this.rightStrips.nativeElement, 'bulb_img');
    this._render.removeClass(this.leftCircle.nativeElement,'bulb_img')
  }

}
