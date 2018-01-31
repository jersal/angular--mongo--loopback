import { Component, OnInit } from '@angular/core';

import { Headers,RequestOptions } from '@angular/http';
import {Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

id:string='';
result=[{}];

name:string='';
email:string='';
phone:string='';
usrname:string='';
password:string='';



  constructor(private http:Http) {
        this.fetchList();
   }

  ngOnInit() { }

fetchList()
          {
          let url='';
          let det='';

          url='http://localhost:3000/api/detailsviews';


          this.http.get(url).subscribe( data => {

            this.result = data.json();

          });


          }

save(event)
    {
     let data={
                 name:this.name,
                  email:this.email,
                  phone:this.phone,
                  usrname:this.usrname,
                  password:this.password
                 };

    let url='http://localhost:3000/api/detailsviews'+this.id;

     let headers=new Headers({ 'Content-Type':'application/json' });
     let options=new RequestOptions({ headers:headers });

     this.http.put(url,data,options)
     .subscribe( data =>{
                    alert('Successfully updated');
                    });

}


showEdit(id){
            window.location.href='/register/'+id;
            }

remove(id)
          {
          }
}
