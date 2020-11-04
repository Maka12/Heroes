import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {HeroesReadComponent} from "./heroes/heroes-read/heroes-read.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HeroesViewComponent} from "./heroes/heroes-view/heroes-view.component";
import {HeroesUpdateComponent} from "./heroes/heroes-update/heroes-update.component";
import {TestComponent} from "./test/test.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'heroes', component: HeroesReadComponent },
  { path: 'teste', component: TestComponent },
  { path: 'heroes-view/:id', component: HeroesViewComponent },
  { path: 'heroes-edit/:id', component: HeroesUpdateComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
