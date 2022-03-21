import {createFeatureSelector, createSelector} from "@ngrx/store";
import {toDoState, ToDoState} from "./to-do.state";
import {ToDoItemStatus} from "../../domain/models/to-do-item.model";

export const toDoSelector = createFeatureSelector<ToDoState>(toDoState);

export const completedItems = createSelector(
  toDoSelector,
  state => state.toDoItems.filter(item => item.status === ToDoItemStatus.Completed)
);

export const createdItems = createSelector(
  toDoSelector,
  state => state.toDoItems.filter(item => item.status === ToDoItemStatus.Created)
);

export const removedItems = createSelector(
  toDoSelector,
  state => state.toDoItems.filter(item => item.status === ToDoItemStatus.Removed)
)
