import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';


import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { PreferitiComponent } from './components/preferiti/preferiti.component';

const routes: Route[] =[
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'preferiti',
    component: PreferitiComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PreferitiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
