import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import {environment} from "../../environments/environment";
import {ToDoState, toDoState} from "./to-do/to-do.state";
import {toDoReducer} from "./to-do/to-do.reducer";

export interface ApplicationStore {
  [toDoState]: ToDoState
}

export const reducers: ActionReducerMap<ApplicationStore> = {
  [toDoState]: toDoReducer
}

export const metaReducers: MetaReducer<ApplicationStore>[] = !environment.production ? [] : [];
