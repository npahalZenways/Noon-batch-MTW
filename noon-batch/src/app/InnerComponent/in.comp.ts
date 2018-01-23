import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'app-inner',
    template: `<p>Inner component</p>
        <p>Received name is: {{receivedInputName}}</p>    
        <button (click)="sendOutput()">Send</button>
    `
    // inputs: []
})
export class InnerComponent {
    @Input('name') receivedInputName;
    @Output() myOutput = new EventEmitter();
    outputString = 'This is output from inner component';
    constructor() {
    }
    sendOutput(){
        this.myOutput.emit(this.outputString);
    }
}