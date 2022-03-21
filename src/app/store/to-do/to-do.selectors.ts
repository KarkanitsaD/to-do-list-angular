import {createFeatureSelector, createSelector} from "@ngrx/store";
import {adapter, toDoState, ToDoState} from "./to-do.state";
import {ToDoItemStatus} from "../../domain/models/to-do-item.model";

export const toDoSelector = createFeatureSelector<ToDoState>(toDoState);

export const selectAllItems = createSelector(
  toDoSelector,
  adapter.getSelectors().selectAll
);

export const completedItems = createSelector(
  selectAllItems,
  items => items.filter(item => item.status === ToDoItemStatus.Completed)
);

export const createdItems = createSelector(
  selectAllItems,
  items => items.filter(item => item.status === ToDoItemStatus.Created)
);

export const removedItems = createSelector(
  selectAllItems,
  items => items.filter(item => item.status === ToDoItemStatus.Removed)
);
