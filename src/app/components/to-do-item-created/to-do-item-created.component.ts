import {Component, Input, OnInit} from '@angular/core';
import {ToDoItemModel, ToDoItemStatus} from "../../domain/models/to-do-item.model";
import {ApplicationStore} from "../../store/store";
import {Store} from "@ngrx/store";
import {markItemAsCompleted, markItemAsRemoved, updateToDoItem} from "../../store/to-do/to-do.actions";
import {Update} from "@ngrx/entity";

@Component({
  selector: 'app-to-do-item-created',
  templateUrl: './to-do-item-created.component.html',
  styleUrls: ['./to-do-item-created.component.scss']
})
export class ToDoItemCreatedComponent implements OnInit {

  @Input() toDoItem!: ToDoItemModel;

  constructor
  (
    private store$: Store<ApplicationStore>
  ) { }

  ngOnInit(): void {
  }

  markAsCompleted(): void {
    let item: ToDoItemModel = {
      ...this.toDoItem,
      status: ToDoItemStatus.Completed
    };

    const update: Update<ToDoItemModel> = {
      id: item.id,
      changes: item
    };

    this.store$.dispatch(updateToDoItem({update: update}));
  }

  markAsRemoved(): void {
    let item: ToDoItemModel = {
      ...this.toDoItem,
      status: ToDoItemStatus.Removed
    };

    const update: Update<ToDoItemModel> = {
      id: item.id,
      changes: item
    };

    this.store$.dispatch(updateToDoItem({update: update}));
  }
}
