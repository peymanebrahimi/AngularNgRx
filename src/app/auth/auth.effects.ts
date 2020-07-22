import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { tap } from "rxjs/operators";
import { login, logout } from "./auth.actions";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions,
    private router: Router) {
    //actions$: Actions, To supervise if any action triggered

    this.login$.subscribe();
  }

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      tap((u) => {
        localStorage.setItem("user", JSON.stringify(u.user));
      })
    ),
    { dispatch: false }
  );

  logOut$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      tap(() => {
        localStorage.removeItem("user");
        this.router.navigateByUrl("/login");
      })
    ), { dispatch: false }
  );


}
