import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, ReactiveFormsModule, FormControlName } from '@angular/forms';
import { FlightService } from '../flight.service';
import { Router } from '@angular/router';
import { GenericValidator } from '../../shared/generic-validator';
import { Observable, debounceTime, fromEvent, merge } from 'rxjs';
import { Flight, SearchFlight, Airports } from '../flight-details';
import { Store } from '@ngrx/store';
import { State, getAirports, getCurrentFlight, getError, getFlights, getSearchFlight } from '../state';
import { FlightPageActions } from '../state/actions';

@Component({
	selector: 'app-search-flights',
	templateUrl: './search-flights.component.html',
	styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {
	@ViewChildren(FormControlName, { read: ElementRef }) formInputElements!: ElementRef[];
	pageTitle = 'Flight Search';
	errorMessage = '';
	flightForm!: FormGroup;

	displayMessage: { [key: string]: string } = {};
	private validationMessages!: { [key: string]: { [key: string]: string; }; };
	private genericValidator: GenericValidator;

	flights$!: Observable<Flight[]>;
	selectedFlight$!: Observable<Flight | null | undefined>;
	errorMessage$!: Observable<any>;
	searchFlight$!: Observable<SearchFlight | null>
	airports$!: Observable<Airports[]>;

	constructor(private fb: FormBuilder,
		private flightService: FlightService,
		private router: Router,
		private store: Store<State>) { 
			this.validationMessages = {
				flightType: {
				  required: 'Flight type is required.'
				},
				flyingFrom: {
				  required: 'Flying from is required.',
				  min: 'Select source airport.'
				},
				flyingTo: {
					required: 'Flying to is required.',
					min: 'Select destination airport.'
				},
				departureDate: {
					required: 'Departure date is required.'
				},
				returnDate: {
					required: 'Return date is required.'
				},
				adultPassenger: {
				  required: 'Adult Passenger is required',
				  min: 'Select atleast 1 adult passenger'
				},
				childPassenger: {
				  required: 'Child Passenger is required'
				},
				travelClass: {
				  required: 'Travel class is required'
				}
			};
		  
			// Define an instance of the validator for use with this form,
			// passing in this form's set of validation messages.
			this.genericValidator = new GenericValidator(this.validationMessages);
		}

	ngOnInit(): void {

		this.store.dispatch(FlightPageActions.loadAirports());
		this.airports$ = this.store.select(getAirports);

		this.flightForm = this.fb.group({
			flightType: ['', Validators.required],
			flyingFrom: ['', [Validators.required, Validators.min(1)]],
			flyingTo: ['', [Validators.required, Validators.min(1)]],
			departureDate: ['', Validators.required],
			returnDate: ['', Validators.required],
			adultPassenger: ['', [Validators.required, Validators.min(1)]],
			childPassenger: ['', Validators.required],
			travelClass: ['', Validators.required]
		});

		this.store.select(getSearchFlight).subscribe(
			(formField: any) =>  {
				if(formField) {
					this.flightForm.patchValue({
						flightType: formField.flightType,
						flyingFrom: formField.flyingFrom,
						flyingTo: formField.flyingTo,
						departureDate: formField.departureDate,
						returnDate: formField.returnDate,
						adultPassenger: formField.adultPassenger,
						childPassenger: formField.childPassenger,
						travelClass: formField.travelClass
					})
				}
			}
		);
	}

	ngAfterViewInit(): void {
		// Watch for the blur event from any input element on the form.
		// This is required because the valueChanges does not provide notification on blur
		const controlBlurs: Observable<any>[] = this.formInputElements
		  .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));
	
		// Merge the blur event observable with the valueChanges observable
		// so we only need to subscribe once.
		merge(this.flightForm.valueChanges, ...controlBlurs).pipe(
		  debounceTime(200)
		).subscribe(value => {
		  this.displayMessage = this.genericValidator.processMessages(this.flightForm);
		});
	}

	searchFlight(formValues: any) {
		// if (this.flightForm.valid) {
			this.store.dispatch(FlightPageActions.loadFlights());
			this.store.dispatch(FlightPageActions.setSearchFlight({searchFlight: formValues}));
			this.errorMessage$ = this.store.select(getError);
			this.selectedFlight$ = this.store.select(getCurrentFlight);
			this.searchFlight$ = this.store.select(getSearchFlight);

			this.router.navigate(['/show-flights']);

			// this.router.navigateByUrl('/refersh-header', { skipLocationChange: true }).then(() => {
			// 	this.router.navigate(['/show-flights']);
			// });
		// }
	}
}
