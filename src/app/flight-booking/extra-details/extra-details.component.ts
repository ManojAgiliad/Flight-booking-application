import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight, SearchFlight } from '../flight-details';
import { State, getCurrentFlight, getSearchFlight } from '../state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'pm-extra-details',
  templateUrl: './extra-details.component.html',
  styleUrls: ['./extra-details.component.css']
})
export class ExtraDetailsComponent implements OnInit {
	flight$!: Observable<Flight | null | undefined>;
	searchFlight$!: Observable<SearchFlight | null>

	constructor( private store: Store<State> ) {}

    ngOnInit(): void {
        this.flight$ = this.store.select(getCurrentFlight);
		    this.searchFlight$ = this.store.select(getSearchFlight);
    }

}
