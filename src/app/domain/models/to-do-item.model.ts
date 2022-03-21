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

