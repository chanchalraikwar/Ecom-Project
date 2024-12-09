import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-test-login',
  templateUrl: './test-login.component.html',
  styleUrls: ['./test-login.component.css']
})

 



export class TestLoginComponent  {

  private http:HttpClient=inject<HttpClient>(HttpClient);
  private url:string=environment.apiUrl;

  objLogin:any={
    username:"chanchal.raikwar@gmail.com",
    password:"Exl@2044"
  };
constructor(private product:ProductService){

}

  onLogIn( )
  { 
 
    this.product.loginApi(this.objLogin).subscribe((result)=>{
      console.warn(result);
    })
 
 
   
  }
  
}
