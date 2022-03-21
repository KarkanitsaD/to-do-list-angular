import { Injectable } from '@angular/core';
import {ToDoItemModel} from "../models/to-do-item.model";

export const toDoItemsKey = 'toDoItems';

@Injectable({
  providedIn: 'root'
})
export class ToDoItemService {

  constructor() { }

  saveToDoState(toDoItems: ToDoItemModel[]): void {
    localStorage.setItem(toDoItemsKey, JSON.stringify(toDoItems));
  }

  getToDoState(): ToDoItemModel[]{
    let toDoItems = localStorage.getItem(toDoItemsKey);
    if(toDoItems) {
      return JSON.parse(toDoItems) as ToDoItemModel[];
    }
    return [];
  }
}
