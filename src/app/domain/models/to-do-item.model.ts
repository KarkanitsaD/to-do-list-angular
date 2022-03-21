export enum ToDoItemStatus {
  Created,
  Completed,
  Removed
}

export interface ToDoItemModel {
  id: string;
  content: string;
  status: ToDoItemStatus
}

export function compareItems(item1: ToDoItemModel, item2: ToDoItemModel): number {
  if(item1.id > item2.id) {
    return 1;
  } else if(item1.id === item2.id) {
    return 0;
  }
  return -1;
}

