import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeroesReadComponent} from './heroes/heroes-read/heroes-read.component';
import {HeaderComponent} from './template/header/header.component';
import {FooterComponent} from './template/footer/footer.component';
import {HomeComponent} from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HeroesViewComponent} from './heroes/heroes-view/heroes-view.component';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatButtonModule} from "@angular/material/button";
import {CKEditorModule} from 'ng2-ckeditor';
import {HeroesUpdateComponent} from './heroes/heroes-update/heroes-update.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroesReadComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeroesViewComponent,
    HeroesUpdateComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatGridListModule,
        HttpClientModule,
        MatSnackBarModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        DragDropModule,
        MatButtonModule,
        CKEditorModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
