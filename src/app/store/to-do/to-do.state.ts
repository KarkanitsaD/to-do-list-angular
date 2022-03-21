import {ToDoItemModel, ToDoItemStatus} from "../../domain/models/to-do-item.model";

export const toDoState = 'toDoState';

export interface ToDoState {
  toDoItems: ToDoItemModel[]
}

export const initialToDoState: ToDoState = {
  toDoItems: []
}
