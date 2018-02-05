import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Nitin';
  options;
  params;
  baseINRRate;
  currencies = [];
  amount : number;
  output;
  selectedCurrency = "";
  birthday = new Date();
  num = 12345.69876567898765678;
  search;
  constructor(private http:Http){
    this.params = new URLSearchParams();
    this.params.set('base', 'INR');
    this.options = new RequestOptions({
      params: this.params
    });
  }
  getRates(){
    this.http.get('https://api.fixer.io/latest', this.options).subscribe(data=>{
      let resposne = data.json();
      this.baseINRRate = resposne.rates;
      for(let currency in this.baseINRRate){
        this.currencies.push({
          currency: currency,
          rate: this.baseINRRate[currency]
        });
      }
    })
  }

  calculate(a){
    if (!this.selectedCurrency){
      this.output = this.baseINRRate["USD"] * this.amount;
    } else {
      let curr = parseFloat(this.selectedCurrency);
      this.output = curr * this.amount;
    }
  }
  ngOnInit(){
    this.getRates();
  }
}
