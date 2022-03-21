import {createReducer, on} from "@ngrx/store";
import {adapter, initialToDoState} from "./to-do.state";
import {
  addToDoItem,
  clearToDoItems,
  setToDoItems, updateToDoItem
} from "./to-do.actions";

export const toDoReducer = createReducer(
  initialToDoState,
  on(setToDoItems, (state, action) =>
    adapter.addMany(action.toDoItems, state)
  ),
  on(clearToDoItems, state =>
    adapter.removeAll(state)
  ),
  on(addToDoItem, (state, action) =>
    adapter.addOne(action.toDoItem, state)
  ),
  on(updateToDoItem, (state, action) =>
    adapter.updateOne(action.update, state)
  ),
)


