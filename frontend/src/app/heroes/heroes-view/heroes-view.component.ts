import {Component, OnInit} from '@angular/core';
import {HeroesService} from "../heroes.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HeroesModel} from "../heroes.model";
import {GlobalConstants} from "../../common/global-constants";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-heroes-view',
  templateUrl: './heroes-view.component.html',
  styleUrls: ['./heroes-view.component.css']
})
export class HeroesViewComponent implements OnInit {
  urlApi = `${GlobalConstants.apiURL}/img/heroes`

  hero: HeroesModel = {
    name: '',
    image: '',
    description: ''
  }

  constructor(private HeroesService: HeroesService, private rota: ActivatedRoute, private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);

    const id = this.rota.snapshot.paramMap.get('id')
    this.HeroesService.View(id).subscribe(hero => {
      this.hero = hero;
      console.log(hero);
    })
  }

}
