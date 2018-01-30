import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MyServiceService } from "../my-service.service";
import { Http, Headers, URLSearchParams, RequestOptions } from "@angular/http";

@Component({
  selector: 'app-home-blank',
  templateUrl: './home-blank.component.html',
  styleUrls: ['./home-blank.component.css']
})
export class HomeBlankComponent implements OnInit {
  uname = 'hello';
  key;
  header;
  params;
  options
  constructor( private r: Router, private login: MyServiceService, private http:Http) { 
    this.header = new Headers();
    this.params = new URLSearchParams();
    this.params.set('base', 'INR');    
    this.options = new RequestOptions({
      params: this.params,
      headers: this.header
    });
  }
  submit(){
    if (this.uname == 'nitin' && this.key == 'admin123') {
      this.login.setUser(true);
      // sessionStorage.setItem('loggedIn', 'true');

      this.r.navigate(['/home/child/123/name'])
    } else {
      console.log('Invalid credenttials')
    }
  }
  ngOnInit() {
    this.http.get('https://api.fixer.io/latest', this.options).subscribe(data=>{
      var response = data.json();
      console.log(response)
    })

    // this.http.post('locadcjsdkjbkx', {username: this.uname, password: this.key})
  }

}
