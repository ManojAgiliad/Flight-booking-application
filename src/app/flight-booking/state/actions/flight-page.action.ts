import { Flight, PassengerDetails, SearchFlight } from '../../flight-details';
import { createAction, props } from '@ngrx/store';

export const toggleFlightCode = createAction(
	'[Flight Page] Toggle Flight Code'
);

export const setCurrentFlight = createAction(
	'[Flight Page] Set Current Flight',
	props<{ currentFlightId: number }>()
);

export const clearCurrentFlight = createAction(
	'[Flight Page] Clear Current Flight'
);

export const initializeCurrentFlight = createAction(
	'[Flight Page] Initialize Current Flight'
);

export const loadFlights = createAction(
	'[Flight Page] Load'
);

export const setSearchFlight = createAction(
	'[Flight Page] Search Flights',
	props<{ searchFlight: SearchFlight }>()
);

export const clearSearchFlight = createAction(
	'[Flight Page] Clear Search Flights'
);

export const setPassengerDetails = createAction(
	'[Flight Page] Set Passenger Details',
	props<{ passengerDetails: PassengerDetails[] }>()
);

export const loadAirports = createAction(
	'[Flight Page] Load Airports'
);

export const setTotalFare = createAction(
	'[Flight Page] Set Total Fare',
	props<{ totalFare: number }>()
);