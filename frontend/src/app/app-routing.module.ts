import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {HeroesReadComponent} from "./heroes/heroes-read/heroes-read.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'heroes', component: HeroesReadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
