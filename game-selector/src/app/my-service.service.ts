import { Injectable } from '@angular/core';

@Injectable()
export class MyServiceService {
  isLoggedIn : boolean = false;
  constructor() { }
  setUser(val:boolean){
    this.isLoggedIn = val;
  }
  getUser():boolean{
    return this.isLoggedIn;
  }

}
