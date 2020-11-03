import { Component, OnInit } from '@angular/core';
import {HeroesService} from "../heroes.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-heroes-view',
  templateUrl: './heroes-view.component.html',
  styleUrls: ['./heroes-view.component.css']
})
export class HeroesViewComponent implements OnInit {
  constructor(private HeroesService: HeroesService, private rota: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.rota.snapshot.paramMap.get('id')
    this.HeroesService.View(id).subscribe(hero =>{

    })
  }

}
