import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AuthState } from "./reducers/index";

export const selectAuthState = createFeatureSelector<AuthState>("auth");

export const isLoggedIn = createSelector(
  //   (state) => state["auth"],
  selectAuthState,
  (state: AuthState) => !!state.user
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  (isLoggedIn) => !isLoggedIn
);
