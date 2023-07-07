import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { User } from "../user";

export interface UserState {
    maskUserName: boolean,
    currentUser: User | null
}

const initialState: UserState = {
    maskUserName: false,
    currentUser: null
}

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
    getUserFeatureState,
    state => state.maskUserName
);

export const getCurrentUser = createSelector(
    getUserFeatureState,
    state => state.currentUser
);

export const toggleMaskUserName = createAction('[User] Mask User Name');

export const userReducer = createReducer(
    initialState,
    on(toggleMaskUserName, state => {
        console.log('Original State : ' + JSON.stringify(state));
        return {
            ...state,
            maskUserName: !state.maskUserName
        };
    })
);