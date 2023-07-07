import { Injectable } from '@angular/core';
import { mergeMap, map, catchError, concatMap, tap } from 'rxjs/operators';
import { FlightService } from '../flight.service';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { FlightApiActions, FlightPageActions } from './actions';
import { flights } from 'src/app/data/flights-data';

@Injectable()
export class FlightEffects {

    constructor(private actions$: Actions, private flightService: FlightService) { }

    loadFlights$ = createEffect(() => {
        return this.actions$
        .pipe(
            ofType(FlightPageActions.loadFlights),
            mergeMap(() => this.flightService.getFlights()
            .pipe(
                map(flights => FlightApiActions.loadFlightsSuccess({ flights })),
                catchError(error => of(FlightApiActions.loadFlightsFailure({error})))
            )
            )
        );
    });

    loadAirports$ = createEffect(() => {
        return this.actions$
        .pipe(
            ofType(FlightPageActions.loadAirports),
            mergeMap(() => this.flightService.getAirports()
            .pipe(
                map(airports => FlightApiActions.loadAirportsSuccess({ airports })),
                catchError(error => of(FlightApiActions.loadAirportsFailure({error})))
            )
            )
        );
    });

}