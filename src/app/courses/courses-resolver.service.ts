import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Course } from './model/course';
import { Store, select } from '@ngrx/store';
import { AppState } from 'app/reducers';
import { tap, first, finalize, filter } from 'rxjs/operators';
import { loadCourses } from "./course.actions";

// @Injectable({ providedIn: 'root' })
@Injectable()
export class CoursesResolverService implements Resolve<Course[]> {
  loading = false;
  constructor(private store: Store<AppState>) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<Course[]> | Course[] {
    // return this.store
    //   .pipe(
    //     select(areCoursesLoaded),
    //     tap(coursesLoaded => {
    //       if (!this.loading && !coursesLoaded) {
    //         this.loading = true;
    //         this.store.dispatch(loadCourses())
    //       }
    //     }),
    //     filter(coursesLoaded => coursesLoaded),
    //     first(), // just for observable completion
    //     finalize(() => { this.loading = false; })
    //   );
    return of([]);
  }
}
