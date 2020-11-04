import {Component, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {HeroesService} from "../heroes.service";
import {GlobalConstants} from "../../common/global-constants";
import {Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";


@Component({
  selector: 'app-heroes-read',
  templateUrl: './heroes-read.component.html',
  styleUrls: ['./heroes-read.component.css']
})
export class HeroesReadComponent implements OnInit {
  @ViewChild('closebuttonD') closebuttonD;
  // tslint:disable:max-line-length
  heroes = []
  urlApi = `${GlobalConstants.apiURL}/img/heroes`

  // tslint:enable:max-line-length

  drop(event: CdkDragDrop<{ name: string, image: string }[]>) {
    moveItemInArray(this.heroes, event.previousIndex, event.currentIndex);
  }

  constructor(private HeroService: HeroesService, private route: Router, private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);

    this.HeroService.Read().subscribe(heroes => {
      this.heroes = heroes
    });
  }

  ApagarHeroi(id) {
    this.HeroService.Delete(id).subscribe(() => {
      this.closebuttonD.nativeElement.click();
      this.HeroService.ShowMessage('Heroi apagado com sucesso')
      this.route.navigate(['/'])
    })
  }

}
