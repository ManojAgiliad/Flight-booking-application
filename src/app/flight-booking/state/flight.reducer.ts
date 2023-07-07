import { createReducer, on } from "@ngrx/store";
import { Flight, SearchFlight, PassengerDetails } from "../flight-details";
import { FlightApiActions, FlightPageActions } from './actions';

export interface FlightState {
	currentFlightId: number | null,
	flights: Flight[],
	error: string,
	searchFlight: SearchFlight | null,
    passengerDetails: PassengerDetails[],
    airports: [],
    totalFare: number | null
}

const initialState: FlightState = {
	currentFlightId: null,
  	flights: [],
  	error: '',
  	searchFlight: null,
    passengerDetails: [],
    airports: [],
    totalFare: null
}

export const flightReducer = createReducer<FlightState>(
    initialState,
    on(FlightPageActions.setCurrentFlight, (state, action): FlightState => {
        return {
            ...state,
            currentFlightId: action.currentFlightId
        };
    }),
    on(FlightPageActions.clearCurrentFlight, (state): FlightState => {
        return {
            ...state,
            currentFlightId: null
        };
    }),
    on(FlightPageActions.initializeCurrentFlight, (state): FlightState => {
        return {
            ...state,
            currentFlightId: 0
        };
    }),
    on(FlightApiActions.loadFlightsSuccess, (state, action): FlightState => {
        return {
            ...state,
            flights: action.flights,
            error: ''
        };
    }),
    on(FlightApiActions.loadFlightsFailure, (state, action): FlightState => {
        return {
            ...state,
            flights: [],
            error: action.error
        };
    }),
	on(FlightPageActions.setSearchFlight, (state, action): FlightState => {
        return {
            ...state,
            searchFlight: action.searchFlight
        };
    }),
	on(FlightPageActions.clearCurrentFlight, (state): FlightState => {
        return {
            ...state,
            searchFlight: null
        };
    }),
    on(FlightPageActions.setPassengerDetails, (state, action): FlightState => {
        return {
            ...state,
            passengerDetails: action.passengerDetails
        };
    }),
    on(FlightApiActions.loadAirportsSuccess, (state, action): FlightState => {
        return {
            ...state,
            airports: action.airports,
            error: ''
        };
    }),
    on(FlightApiActions.loadAirportsFailure, (state, action): FlightState => {
        return {
            ...state,
            airports: [],
            error: action.error
        };
    }),
    on(FlightPageActions.setTotalFare, (state, action): FlightState => {
        return {
            ...state,
            totalFare: action.totalFare
        };
    }),
);