import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { MyServiceService } from "../my-service.service";

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.css']
})
export class HomeChildComponent implements OnInit {
  constructor(private r: Router, private ar: ActivatedRoute, private login: MyServiceService) { }

  logout(){
    this.login.setUser(false);
    this.r.navigate(['/home']);
  }

  ngOnInit() {
    if(!this.login.getUser()) {
      this.r.navigate(['/home'])
    }

    console.log(this.ar.snapshot.params.id, this.ar.snapshot.params.name)
    
  }

}
