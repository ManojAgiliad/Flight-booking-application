import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Flight, SearchFlight } from '../flight-details';
import { FlightService } from '../flight.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State, getFlights, getSearchFlight } from '../state';
import { FlightPageActions } from '../state/actions';

@Component({
	selector: 'app-show-flights',
	templateUrl: './show-flights.component.html',
	styleUrls: ['./show-flights.component.css']
})
export class ShowFlightsComponent {
	flights$!: Observable<Flight[]>;
	searchFlight$!: Observable<SearchFlight | null>;
	
	constructor(private flightService: FlightService, 
				private router: Router,
				private store: Store<State>) {
	}

	ngOnInit(): void {
		this.flights$ = this.store.select(getFlights);
		this.searchFlight$ = this.store.select(getSearchFlight);
	}

	flightSelected(flight: Flight): void {
		this.store.dispatch(FlightPageActions.setCurrentFlight({currentFlightId: flight.id}));
		this.router.navigate(['/flight-details']);
	}
}
