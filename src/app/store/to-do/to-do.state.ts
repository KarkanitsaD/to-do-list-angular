import {ToDoItemModel, ToDoItemStatus} from "../../domain/models/to-do-item.model";

export const toDoState = 'toDoState';

export interface ToDoState {
  toDoItems: ToDoItemModel[]
}

export const initialToDoState: ToDoState = {
  toDoItems: [
    {id: Date.now().toString() + '9', content: 'First', status: ToDoItemStatus.Created},
    {id: Date.now().toString() + '10', content: 'Second', status: ToDoItemStatus.Created},
    {id: Date.now().toString() + '11', content: 'Third', status: ToDoItemStatus.Created},
    {id: Date.now().toString() + '12', content: 'Fourth', status: ToDoItemStatus.Created},
  ]
}
