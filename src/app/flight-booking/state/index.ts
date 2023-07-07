import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as AppState from '../../state/app.state';
import { FlightState } from "./flight.reducer";

export interface State extends AppState.State {
    flights: FlightState;
}

const getFlightFeatureState = createFeatureSelector<FlightState>('flights');

export const getCurrentFlightId = createSelector(
    getFlightFeatureState,
    state => state.currentFlightId
);

export const getCurrentFlight = createSelector(
    getFlightFeatureState,
    getCurrentFlightId,
    (state, currentFlightId) => {
        return currentFlightId ? state.flights.find(p => p.id === currentFlightId) : null;
    }
);
  
export const getFlights = createSelector(
    getFlightFeatureState,
    state => state.flights
);

export const getError = createSelector(
    getFlightFeatureState,
    state => state.error
);

export const getSearchFlight = createSelector(
    getFlightFeatureState,
    state => state.searchFlight
);

export const getPassengerDetails = createSelector(
    getFlightFeatureState,
    state => state.passengerDetails
);

export const getAirports = createSelector(
    getFlightFeatureState,
    state => state.airports
);

export const getTotalFare = createSelector(
    getFlightFeatureState,
    state => state.totalFare
);