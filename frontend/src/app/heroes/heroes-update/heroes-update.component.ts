import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HeroesService} from "../heroes.service";
import {HeroesModel} from "../heroes.model";
import {FormControl, FormGroup} from "@angular/forms";
import {GlobalConstants} from "../../common/global-constants";

@Component({
  selector: 'app-heroes-update',
  templateUrl: './heroes-update.component.html',
  styleUrls: ['./heroes-update.component.css']
})
export class HeroesUpdateComponent implements OnInit {
  urlApi = `${GlobalConstants.apiURL}/img/heroes`
  imageSrc: any
  hero: HeroesModel = {
    id: null,
    name: '',
    resume:'',
    image: '',
    description: ''
  }

  profileForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    resume: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl('')
  });

  constructor(private HeroesService: HeroesService, private rota: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const id = this.rota.snapshot.paramMap.get('id')
    this.HeroesService.View(id).subscribe(hero => {
      this.hero = hero;
    })
  }

  onSubmit() {
    this.HeroesService.Update(this.profileForm.value).subscribe(() => {
      this.HeroesService.ShowMessage('Heroi atualizado com sucesso')
      this.router.navigate([' '])
    })
  }

  onSubmitImg() {
  //  console.log(this.profileForm.value)
    this.HeroesService.UpdateImg(this.profileForm.value).subscribe(() => {
      this.HeroesService.ShowMessage('Imagem de heroi atualizado com sucesso')
      this.router.navigate([' '])
    })
  }

    onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.profileForm.patchValue({
        image: file
      });
    }
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;
      reader.readAsDataURL(file);
    }
  }


}
