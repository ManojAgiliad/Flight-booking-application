import { Flight } from '../../flight-details';
import { createAction, props } from '@ngrx/store';

export const loadFlightsSuccess = createAction(
  '[Flight API] Load Success',
  props<{ flights: Flight[] }>()
);

export const loadFlightsFailure = createAction(
  '[Flight API] Load Fail',
  props<{ error: string }>()
);

export const loadAirportsSuccess = createAction(
  '[Flight API] Load Success',
  props<{ airports: [] }>()
);

export const loadAirportsFailure = createAction(
  '[Flight API] Load Fail',
  props<{ error: string }>()
);

