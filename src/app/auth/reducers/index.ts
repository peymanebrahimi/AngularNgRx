import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on,
} from "@ngrx/store";
import { environment } from "../../../environments/environment";
import { User } from "../model/user.model";
import { login, logout } from "../auth.actions";

export interface AuthState {
  user: User;
}

export const initialAuthState: AuthState = {
  user: undefined,
};
// export const reducers: ActionReducerMap<AuthState> = {

// };

export const metaReducers: MetaReducer<AuthState>[] = !environment.production
  ? []
  : [];

export const authReducer = createReducer(
  initialAuthState,
  on(login, (state, action) => {
    return {
      user: action.user,
    };
  }),
  on(logout, (state, action) => {
    return {
      user: undefined,
    };
  })
);
