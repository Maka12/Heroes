import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HeroesModel} from "./heroes.model";
import {EMPTY, Observable} from "rxjs";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import {catchError, map} from "rxjs/operators";
import {GlobalConstants} from "../common/global-constants";


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  baseUrl = `${GlobalConstants.apiURL}/api/heroes`;
  baseUrlImg = `${GlobalConstants.apiURL}/api/heroes-alt-img`;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  constructor(private _snackBar: MatSnackBar, private http: HttpClient,) {
  }

  ShowMessage(msg: string, isError: boolean = false): void {
    this._snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  Create(data: HeroesModel): Observable<HeroesModel> {
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('resume', data.resume)
    formData.append('image', data.image)
    formData.append('description', data.description)
    return this.http.post<HeroesModel>(this.baseUrl, formData).pipe(
      map(obj => obj), catchError(e => this.ErrorHandler(e))
    );
  }

  Read(): Observable<HeroesModel[]> {
    return this.http.get<HeroesModel[]>(this.baseUrl).pipe(
      map(obj => obj), catchError(e => this.ErrorHandler(e))
    )
  }

  View(id: string): Observable<HeroesModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<HeroesModel>(url).pipe(
      map(obj => obj), catchError(e => this.ErrorHandler(e))
    )
  }

  Update(data: HeroesModel) {
    const url = `${this.baseUrl}/${data.id}`;
    return this.http.put<HeroesModel>(url, data).pipe(
      map(obj => obj), catchError(e => this.ErrorHandler(e))
    )
  }

  UpdateImg(data: HeroesModel) {
    const url = `${this.baseUrlImg}/${data.id}`;
    const formData = new FormData()
    formData.append('image', data.image)
    return this.http.post<HeroesModel>(url, formData).pipe(
      map(obj => obj), catchError(e => this.ErrorHandler(e))
    )
  }

  Delete(id: string): Observable<HeroesModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<HeroesModel>(url).pipe(
      map(obj => obj),
      catchError(e => this.ErrorHandler(e))
    );
  }

  ErrorHandler(e: any): Observable<any> {
    this.ShowMessage('Ocorreu um erro!', true)
    return EMPTY
  }
}
