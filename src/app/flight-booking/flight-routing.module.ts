import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { ShowFlightsComponent } from './show-flights/show-flights.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { LoginComponent } from '../user/login.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { HeaderComponent } from '../shared/header/header.component';

const flightRoutes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'home', component: SearchFlightsComponent },
	{
		path: 'search-flights',
		component: SearchFlightsComponent
	},
	{
		path: 'show-flights',
		component: ShowFlightsComponent
	},
	{
		path: 'flight-details',
		component: FlightDetailsComponent
	},
	{
		path: 'booking-details',
		component: BookingDetailsComponent
	},
	{
		path: 'payment-details',
		component: PaymentDetailsComponent
	},
	{
		path: 'booking-history',
		component: BookingHistoryComponent
	},
	{
		path: 'passenger-details',
		component: PassengerDetailsComponent
	},
	{
		path: 'confirm',
		component: ConfirmationComponent
	},
	{
		path: 'success-page',
		component: SuccessPageComponent
	},
	{
		path: 'refresh-header',
		component: HeaderComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(flightRoutes)
	],
	exports: [RouterModule],
})
export class FlightRoutingModule { }
