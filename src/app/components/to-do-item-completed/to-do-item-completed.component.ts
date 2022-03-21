import {Component, Input, OnInit} from '@angular/core';
import {ToDoItemModel, ToDoItemStatus} from "../../domain/models/to-do-item.model";
import {markItemAsCreated, markItemAsRemoved, updateToDoItem} from "../../store/to-do/to-do.actions";
import {Store} from "@ngrx/store";
import {ApplicationStore} from "../../store/store";
import {Update} from "@ngrx/entity";

@Component({
  selector: 'app-to-do-item-completed',
  templateUrl: './to-do-item-completed.component.html',
  styleUrls: ['./to-do-item-completed.component.scss']
})
export class ToDoItemCompletedComponent implements OnInit {

  @Input() toDoItem!: ToDoItemModel;

  constructor
  (
    private store$: Store<ApplicationStore>
  ) { }

  ngOnInit(): void {
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

  markAsCreated(): void {
    let item: ToDoItemModel = {
      ...this.toDoItem,
      status: ToDoItemStatus.Created
    };

    const update: Update<ToDoItemModel> = {
      id: item.id,
      changes: item
    };

    this.store$.dispatch(updateToDoItem({update: update}));
  }
}
