import { Injectable } from '@angular/core';
import { Flight } from './flight-details';
import { Observable, catchError, of, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FlightService {

  private flightsUrl = 'api/flights';
  private airportsUrl = 'api/airports';
  private usersUrl = 'api/users';

  flights!: Observable<Flight[]>;

  constructor(private http: HttpClient) { }

  getFlights() {
    return this.http.get<any>(this.flightsUrl)
            .pipe(
              tap(data => console.log('getFlight: ' + JSON.stringify(data))),
              catchError(this.handleError)
            );
  }

  getAirports() {
    return this.http.get<any>(this.airportsUrl)
  }

  getFlight(id: number): Observable<Flight> {
    const url = `${this.flightsUrl}/${id}`;
    return this.http.get<Flight>(url)
      .pipe(
        tap(data => console.log('getFlight: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: any): Observable<never> {
    console.log("Here")
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
