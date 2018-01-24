import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';
import { ViewupdateComponent } from './viewupdate/viewupdate.component';
import { MsgComponent } from './msg/msg.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ViewComponent,
    ViewupdateComponent,
    MsgComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,

    RouterModule.forRoot([

    {path:'login',component:LoginComponent},

    {path:'register',component:RegisterComponent},

    {path:'view',component:ViewComponent},

    {path:'viewupdate',component:ViewupdateComponent},

    {path:'msg',component:MsgComponent}
    ])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
