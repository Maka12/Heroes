import {Component, OnInit} from '@angular/core';
import {HeroesService} from "../heroes/heroes.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data = []

  constructor(private HeroService: HeroesService, private router: Router) {
  }

  profileForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl('')

  });

  ngOnInit(): void {
    this.HeroService.Read().subscribe(heroes => {
      this.data = heroes
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.HeroService.Create(this.profileForm.value).subscribe(() => {
      this.HeroService.ShowMessage('Usuario Criado')
      this.router.navigate(['/home'])
    })
    console.log(this.profileForm.value)
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.profileForm.patchValue({
        image: file
      });
    }
  }

}
