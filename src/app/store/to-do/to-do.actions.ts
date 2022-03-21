import {createAction, props} from "@ngrx/store";
import {ToDoItemModel} from "../../domain/models/to-do-item.model";

export const setToDoItems = createAction(
  '[TODO] set to do items',
  props<{toDoItems: ToDoItemModel[]}>()
);

export const clearToDoItems = createAction(
  '[TODO] clear items'
);

export const addToDoItem = createAction(
  '[TODO] add to do item',
  props<{toDoItem: ToDoItemModel}>()
);

export const markItemAsCompleted = createAction(
  '[TODO] mark to do item as completes',
  props<{id: string}>()
);

export const markItemAsRemoved = createAction(
  '[TODO] mark to do item as removed',
  props<{id: string}>()
);

export const markItemAsCreated = createAction(
  '[TODO] mark to do item as created',
  props<{id: string}>()
);


