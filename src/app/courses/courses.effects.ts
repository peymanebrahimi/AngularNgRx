import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadCourses, loadCoursesSuccess, courseUpdated } from './course.actions';
import { CoursesHttpService } from './services/courses-http.service';
import { concatMap, map } from 'rxjs/operators';



@Injectable()
export class CoursesEffects {

  constructor(private actions$: Actions,
    private courseService: CoursesHttpService) { }

  loadCourses$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadCourses),
      concatMap(action => this.courseService.findAllCourses()),
      map(courses => loadCoursesSuccess({ data: courses }))
    )
  );

  saveCourse$ = createEffect(
    () => this.actions$.pipe(
      ofType(courseUpdated),
      concatMap(action => this.courseService.saveCourse(action.update.id, action.update.changes))
    ), { dispatch: false }
  );
}
