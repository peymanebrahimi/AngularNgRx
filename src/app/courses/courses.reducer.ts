import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Course, compareCourses } from "./model/course";
import { loadCoursesSuccess, courseUpdated } from "./course.actions";

export const coursesFeatureKey = 'courses';

export interface CoursesState extends EntityState<Course> {
  allCoursesLoaded: boolean
}

export const adaptor = createEntityAdapter<Course>({
  sortComparer: compareCourses,
  selectId: course => course.id // this is by default
});

export const initialCoursesState = adaptor.getInitialState({
  allCoursesLoaded: false
});


export const CoursesReducer = createReducer(
  initialCoursesState,
  on(loadCoursesSuccess,
    (state, action) => adaptor.addAll(action.data, { ...state, allCoursesLoaded: true })), // shallow copy

  on(courseUpdated,
    (state, action) => adaptor.updateOne(action.update, state))
);

export const { selectAll } = adaptor.getSelectors();