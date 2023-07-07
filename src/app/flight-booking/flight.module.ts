import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GooglePayButtonModule } from "@google-pay/button-angular";

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FlightDatabase } from '../data/application-database';

import { HoursPipe } from 'src/app/common/pipes/hours.pipe';
import { PercentagePipe } from 'src/app/common/pipes/percentage.pipe';
// import { HeaderComponent } from '../shared/header/header.component';
// import { FooterComponent } from '../shared/footer/footer.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { ShowFlightsComponent } from './show-flights/show-flights.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';

import { FlightRoutingModule } from './flight-routing.module';

import { StoreModule } from '@ngrx/store';
import { flightReducer } from './state/flight.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FlightEffects } from './state/flight.effect';
import { ExtraDetailsComponent } from './extra-details/extra-details.component';
import { ToastrModule } from 'ngx-toastr';
import { SuccessPageComponent } from './success-page/success-page.component';

@NgModule({
	declarations: [
		// HeaderComponent,
		// FooterComponent,
		SearchFlightsComponent,
		ShowFlightsComponent,
		FlightDetailsComponent,
		BookingDetailsComponent,
		PassengerDetailsComponent,
		PaymentDetailsComponent,
		ConfirmationComponent,
		BookingHistoryComponent,
		ExtraDetailsComponent,
		HoursPipe,
		PercentagePipe,
  		SuccessPageComponent
	],
	imports: [
		BrowserModule,
		FlightRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot(),
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		StoreModule.forFeature('flights', flightReducer),
    	EffectsModule.forFeature([FlightEffects]),
		GooglePayButtonModule
	],
	providers: []
})
export class FlightModule { }
