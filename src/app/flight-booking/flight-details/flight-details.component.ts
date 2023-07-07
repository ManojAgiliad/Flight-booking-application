// import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Flight } from '../flight-details';
// import { FlightService } from '../flight.service';
// import { Subscription } from 'rxjs';

// @Component({
// 	selector: 'app-flight-details',
// 	templateUrl: './flight-details.component.html',
// 	styleUrls: ['./flight-details.component.css']
// })
// export class FlightDetailsComponent implements OnInit {

// 	private sub!: Subscription;
// 	flight!: Flight;
// 	errorMessage: any;
	
// 	constructor(
// 					private flightService: FlightService,
// 					private fb: FormBuilder,
// 					private route: ActivatedRoute,
// 					private router: Router
// 				) {

// 	}

// 	ngOnInit(): void {
// 		this.sub = this.route.paramMap.subscribe(
// 			params => {
// 			  const id = params.get('id');
// 			  this.getFlight(Number(id));
// 			}
// 		);

// 		console.log("this.flight : ", this.flight);
// 	}

// 	getFlight(id: number): void {
// 		this.flightService.getFlight(id)
// 		  .subscribe({
// 			next: (flight: Flight) => this.flight = flight,
// 			error: err => this.errorMessage = err
// 		  });
// 	  }
// }


import { Component, OnInit } from '@angular/core';
import { Flight, SearchFlight } from '../flight-details';
import { Observable } from 'rxjs';
import { State, getCurrentFlight, getSearchFlight } from '../state';
import { Store } from '@ngrx/store';

@Component({
	selector: 'app-flight-details',
	templateUrl: './flight-details.component.html',
	styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {

	flight$!: Observable<Flight | null | undefined>;
	searchData!: SearchFlight | null;
	errorMessage: any;
	
	constructor( private store: Store<State> ) {

	}

	ngOnInit(): void {
		this.flight$ = this.store.select(getCurrentFlight);
		this.store.select(getSearchFlight).subscribe(
			s => this.searchData = s
		);
	}
}

