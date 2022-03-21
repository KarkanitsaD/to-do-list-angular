import {createReducer, on} from "@ngrx/store";
import {initialToDoState} from "./to-do.state";
import {
  addToDoItem,
  clearToDoItems,
  markItemAsCompleted,
  markItemAsCreated,
  markItemAsRemoved,
  setToDoItems
} from "./to-do.actions";
import {ToDoItemModel, ToDoItemStatus} from "../../domain/models/to-do-item.model";

export const toDoReducer = createReducer(
  initialToDoState,
  on(setToDoItems, (state, action) => ({
    ...state,
    toDoItems: action.toDoItems
  })),
  on(clearToDoItems, state => ({
    ...state,
    toDoItems: []
  })),
  on(addToDoItem, (state, action) => ({
    ...state,
    toDoItems: [...state.toDoItems, action.toDoItem]
  })),
  on(markItemAsCompleted, (state, action) => {
    let updatedItems: ToDoItemModel[] = [];
    state.toDoItems.forEach(item => {
      if(item.id === action.id) {
        updatedItems.push({id: item.id, content: item.content, status: ToDoItemStatus.Completed});
      } else {
        updatedItems.push(item);
      }
    })
    return {
      ...state,
      toDoItems: updatedItems
    }
  }),
  on(markItemAsCreated, (state, action) => {
    let updatedItems: ToDoItemModel[] = [];
    state.toDoItems.forEach(item => {
      if(item.id === action.id) {
        updatedItems.push({id: item.id, content: item.content, status: ToDoItemStatus.Created});
      } else {
        updatedItems.push(item);
      }
    })
    return {
      ...state,
      toDoItems: updatedItems
    }
  }),
  on(markItemAsRemoved, (state, action) => {
    let updatedItems: ToDoItemModel[] = [];
    state.toDoItems.forEach(item => {
      if(item.id === action.id) {
        updatedItems.push({id: item.id, content: item.content, status: ToDoItemStatus.Removed});
      } else {
        updatedItems.push(item);
      }
    })
    return {
      ...state,
      toDoItems: updatedItems
    }
  })
)


