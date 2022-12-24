import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ["./career.component.scss"],
})
export class CareerComponent implements OnInit {

  careersForm!:FormGroup;

  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm():void{
    this.careersForm = this._fb.group({
      name:[],
      email:[],
      phoneNumber:[],
      address:[]

    })
  }



}
