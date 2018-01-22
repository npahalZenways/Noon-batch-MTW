import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from "./header/header";
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    // rest
    AppComponent,
    HeaderComponent
  ],
  imports: [
    // modules
    BrowserModule,
    FormsModule
  ],
  providers: [
    // services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
