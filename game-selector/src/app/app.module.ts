import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule, Route } from "@angular/router";
import { AppComponent } from './app.component';
import { GameSelectorComponent } from './game-selector/game-selector.component';
import { HomeComponent } from './home/home.component';
import { HomeChildComponent } from './home-child/home-child.component';
import { HomeBlankComponent } from './home-blank/home-blank.component';
import { MyServiceService } from "./my-service.service";
import { HttpModule } from "@angular/http";

const r:Route[] = [{

}]

@NgModule({
  declarations: [
    AppComponent,
    GameSelectorComponent,
    HomeComponent,
    HomeChildComponent,
    HomeBlankComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([{
      path:'',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: HomeComponent,
      children:[{
        path:'',
        component: HomeBlankComponent 
      }, {
        path: 'child/:id/:name',
        component: HomeChildComponent
      }]
    }, {
      path: 'game',
      component: GameSelectorComponent
    }])
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
