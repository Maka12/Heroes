import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {HeroesService} from "../heroes.service";
import {GlobalConstants} from "../../common/global-constants";
import {Router} from "@angular/router";


@Component({
  selector: 'app-heroes-read',
  templateUrl: './heroes-read.component.html',
  styleUrls: ['./heroes-read.component.css']
})
export class HeroesReadComponent implements OnInit {

  // tslint:disable:max-line-length
  heroes = []
  urlApi=`${GlobalConstants.apiURL}/img/heroes`
  // tslint:enable:max-line-length

  drop(event: CdkDragDrop<{name: string, image: string}[]>) {
    moveItemInArray(this.heroes, event.previousIndex, event.currentIndex);
  }

  constructor(private HeroService: HeroesService, private Route: Router) { }

  ngOnInit(): void {
    this.HeroService.Read().subscribe(heroes => {
      this.heroes = heroes
    });
  }
  ApagarHeroi(id){
    this.HeroService.Delete(id).subscribe( () =>{
       this.HeroService.ShowMessage('Heroi apagado com sucesso')
       this.Route.navigate(['/home'])
    })
  }

}
