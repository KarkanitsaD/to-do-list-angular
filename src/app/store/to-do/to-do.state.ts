import {compareItems, ToDoItemModel} from "../../domain/models/to-do-item.model";
import {createEntityAdapter, EntityState} from "@ngrx/entity";

export const toDoState = 'toDoState';

export const adapter = createEntityAdapter<ToDoItemModel>({
  sortComparer: compareItems,
  selectId: item => item.id
});

export interface ToDoState extends EntityState<ToDoItemModel> { }

export const initialToDoState = adapter.getInitialState();

