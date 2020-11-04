import {Component, OnInit, ViewChild} from '@angular/core';
import {HeroesService} from "../heroes/heroes.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {GlobalConstants} from "../common/global-constants";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('closebutton') closebutton;
  data = []
  urlApi = `${GlobalConstants.apiURL}/img/heroes`
  imageSrc: any

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }

  constructor(private HeroService: HeroesService, private router: Router, private spinner: NgxSpinnerService) {
  }

  profileForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl('')
  });

  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
    this.HeroService.Read().subscribe(heroes => {
      this.data = heroes
    });
  }

  onSubmit() {
    this.HeroService.Create(this.profileForm.value).subscribe(() => {
      this.router.navigate(['/'])
      this.closebutton.nativeElement.click();
      this.HeroService.ShowMessage('Heroi criado com sucesso')
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

  ml() {
    console.log('Ola mundo')
  }

}
