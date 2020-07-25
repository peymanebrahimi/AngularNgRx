import { createAction, props } from '@ngrx/store';
import { Course } from "./model/course";
import { Update } from '@ngrx/entity';

export const loadCourses = createAction(
  '[Courses Resolver] Load Courses'
);

export const loadCoursesSuccess = createAction(
  '[Courses Effect] Load Courses Success',
  props<{ data: Course[] }>()
);

export const loadCoursesFailure = createAction(
  '[Course Effect] Load Courses Failure',
  props<{ error: any }>()
);

export const courseUpdated = createAction(
  "[Edit Course Dialog] Course Updated",
  props<{update:Update<Course>}>()
);