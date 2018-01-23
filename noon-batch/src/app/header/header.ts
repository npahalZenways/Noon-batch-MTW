import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    // template: `
    //     <div>
    //         <p>This is my header template</p>
    //     </div>
    // `
    templateUrl: './header.html',
    // styleUrls: ['./header1.css', './header2.css']
    // styles: ['p{color:blue}', 'p{font-size:30px}']
})
export class HeaderComponent{
    myName;
    myUser = {
        name:'',
        email:'',
        passkey: '',
        phone: ''
    }
    printInConsole(e){
        console.log('Received: ', e)
    }
    getData(form){
        console.log(form);
        this.myUser = {
            name: '',
            email: '',
            passkey: '',
            phone: ''
        }
    }
}