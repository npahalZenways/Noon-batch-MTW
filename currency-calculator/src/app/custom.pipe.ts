import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let filtered;    
    if(args){
      filtered = value.filter(item=>{
        return item.currency.toLowerCase().indexOf(args.toLowerCase()) != -1;
      })
      return filtered;
    }
    else {
      return value;
    }
  }

}
