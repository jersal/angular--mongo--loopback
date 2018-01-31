import { Component, OnInit } from '@angular/core';

import { Headers,RequestOptions } from '@angular/http';
import {Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

name:string='';
email:string='';
phone:string='';
usrname:string='';
password:string='';


  constructor( private http:Http ) { }

  ngOnInit() { }


myEvent(event)
    {
    var data={
             name:this.name,
              email:this.email,
              phone:this.phone,
              usrname:this.usrname,
              password:this.password
             };


    let headers=new Headers({'Content-Type':'application/json'});
    let options=new RequestOptions({headers:headers});

    this.http.post('http://localhost:3000/api/detailsviews',data,options)
    .subscribe(data =>{
                  alert('Successfully inserted');

              });
    }

}
