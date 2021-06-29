import { Injectable } from '@angular/core';
import { CalcolatorType } from '../models/calcolator';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private calculator: CalcolatorType[];

  constructor(private http: HttpClient) {}

  getCalculator(): Observable<CalcolatorType[]> {
    if (this.calculator)
    {
      return of(this.calculator);
    }
    else
    {
      return this.http.get<CalcolatorType[]>('./repository/data_repositorie.json')
      .pipe(tap(calculator => this.calculator = calculator));
    }
  }
}
