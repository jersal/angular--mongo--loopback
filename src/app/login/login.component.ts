import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

usrname:string='';
password='';

  constructor(private http:Http, private routes:RouterModule) {

   var log=sessionStorage.getItem('detailsview');

   if( log !=null )
   window.location.href='msg';
   }

  ngOnInit() {  }

  myEvent(){
 var v='http://localhost:3000/api/detailsviews?filter[where][usrname]='+this.usrname+'&filter[where][password]='+this.password;
 // var v='http://localhost:3000/api/detailsviews';

  this.http.get(v).subscribe(  data => {
  var result=data.json();


  console.log('ssss'+JSON.stringify(result));

  if(result[0].usrname !='')
      {
      sessionStorage.setItem( 'detailsview' , "ok");
      alert('you are successfully logged in');
      window.location.href='/msg';
      }
      else
      {
            alert('you are successfully logged in');
      }

     });

  }


}
