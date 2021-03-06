import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {HeroesReadComponent} from "./heroes/heroes-read/heroes-read.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HeroesViewComponent} from "./heroes/heroes-view/heroes-view.component";
import {HeroesUpdateComponent} from "./heroes/heroes-update/heroes-update.component";
import {SobreComponent} from "./sobre/sobre.component";
import {PrecoComponent} from "./preco/preco.component";
import {ContatoComponent} from "./contato/contato.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'galeria', component: HeroesReadComponent },
  { path: 'galeria-view/:id', component: HeroesViewComponent },
  { path: 'galeria-edit/:id', component: HeroesUpdateComponent },
  { path: 'precos', component: PrecoComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
