import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from "./header/header";
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InnerComponent } from "./InnerComponent/in.comp";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    // rest
    AppComponent,
    HeaderComponent,
    InnerComponent,
    FooterComponent
  ],
  imports: [
    // modules
    BrowserModule,
    FormsModule
  ],
  providers: [
    // services
  ],
  bootstrap: [HeaderComponent]
})
export class AppModule { }
