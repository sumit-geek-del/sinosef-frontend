import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactUsForm!:FormGroup;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm():void{
    this.contactUsForm = this._fb.group({
      name:[],
      email:[],
      subject:[],
      phoneNumber:[],
      message:[]
    })
  }

}
