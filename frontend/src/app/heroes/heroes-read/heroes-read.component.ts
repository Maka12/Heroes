import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {HeroesService} from "../heroes.service";


@Component({
  selector: 'app-heroes-read',
  templateUrl: './heroes-read.component.html',
  styleUrls: ['./heroes-read.component.css']
})
export class HeroesReadComponent implements OnInit {

  // tslint:disable:max-line-length
  heroes = []
  urlApi = 'http://127.0.0.1:8000/img/heroes'
  // tslint:enable:max-line-length

  drop(event: CdkDragDrop<{name: string, image: string}[]>) {
    moveItemInArray(this.heroes, event.previousIndex, event.currentIndex);
  }

  constructor(private HeroService: HeroesService) { }

  ngOnInit(): void {
    this.HeroService.Read().subscribe(heroes => {
      this.heroes = heroes
    });
  }

}
