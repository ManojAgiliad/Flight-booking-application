import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription, debounceTime, fromEvent, merge, take } from 'rxjs';
import { GenericValidator } from 'src/app/shared/generic-validator';
import { State, getPassengerDetails, getSearchFlight } from '../state';
import { Store } from '@ngrx/store';
import { FlightPageActions } from '../state/actions';
import { SearchFlight } from '../flight-details';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {

	@ViewChildren(FormControlName, { read: ElementRef }) formInputElements!: ElementRef[];
  	passengerForm!: FormGroup;
	displayMessage: { [key: string]: string } = {};
	private validationMessages!: { [key: string]: { [key: string]: string; }; };
	private genericValidator: GenericValidator;
	searchFlight$!: Observable<SearchFlight | null>
	searchData!: SearchFlight | null;
	passengerData!: any;
	showContinue: boolean = false;

	get passengers(): FormArray {
		return <FormArray>this.passengerForm.get('passengers');
	}

  	constructor(private fb: FormBuilder,
		private router: Router,
		private store: Store<State>,
		private toastr: ToastrService) {

			this.validationMessages = {
				fullName: {
				  	required: 'Full name is required.'
				},
				type: {
				  	required: 'Passenger type is required.'
				},
				gender: {
					required: 'Gender is required.'
				}
			};
		
			this.genericValidator = new GenericValidator(this.validationMessages);
	}
    
    ngOnInit(): void {
        this.passengerForm = this.fb.group({
			passengers: this.fb.array([this.buildPassenger()])
		})

		this.store.select(getSearchFlight).subscribe(
			search => this.searchData = search
		);

		this.store.select(getPassengerDetails).subscribe(
			value => this.passengerData = value
		);

		if(this.passengerData.length > 0) {
			this.passengerData.forEach((app: any, index: number) => {
				if(index < (this.passengerData.length - 1))
				{
					this.passengers.push(this.buildPassenger());
				}
			});

			this.passengerForm.setValue({passengers: this.passengerData});
		}

    }

	buildPassenger(): FormGroup {
		return this.fb.group({
			fullName: ['', Validators.required],
			type: ['', Validators.required],
			gender: ['', Validators.required]
		})
	}

	addPassenger(): void {
		if(this.passengerForm.valid && this.PassengerTypeValidation(true)) {
			this.passengers.push(this.buildPassenger());
		} else if(!this.passengerForm.valid) {
			this.toastr.warning('Please add correct details of previous passengers');
		}
	}

	PassengerTypeValidation(fromAddNew = false): boolean {
		var passengersData = this.passengerForm?.get('passengers')?.value;
		if(passengersData.length > 0) {
			if(this.searchData) {
				let adultPassengers = passengersData.filter((data: any) => {
					return data.type === "Adult"
				})

				let childPassengers = passengersData.filter((data: any) => {
					return data.type === "Child"
				})

				if(adultPassengers.length > this.searchData?.adultPassenger || 
					childPassengers.length > this.searchData?.childPassenger) {
					this.toastr.error(`You have to add ` + this.searchData?.adultPassenger + ` adult & ` + this.searchData?.childPassenger + ` child passengers`);
					return false;
				}

				if(passengersData.length === (Number(this.searchData?.adultPassenger) + Number(this.searchData?.childPassenger)) - 1 && fromAddNew) {
					this.showContinue = true;
				}

				return true;
			}
		}
		return false;
	}

	submitPassengerDetails(formValues: any) {
		if(this.passengerForm.valid && this.PassengerTypeValidation()) {
			this.store.dispatch(FlightPageActions.setPassengerDetails({passengerDetails: formValues.passengers}));
			this.router.navigate(['/confirm']);
		} else {
			this.toastr.error('Please add all passengers details');
		}
	}

	ngAfterViewInit(): void {
		// Watch for the blur event from any input element on the form.
		// This is required because the valueChanges does not provide notification on blur
		const controlBlurs: Observable<any>[] = this.formInputElements
		  .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));
	
		// Merge the blur event observable with the valueChanges observable
		// so we only need to subscribe once.
		merge(this.passengerForm.valueChanges, ...controlBlurs).pipe(
		  debounceTime(200)
		).subscribe(value => {
		  this.displayMessage = this.genericValidator.processMessages(this.passengerForm.getRawValue());
		});
	}

	blur(): void {
		this.displayMessage = this.genericValidator.processMessages(this.passengerForm.getRawValue());
	}
}
