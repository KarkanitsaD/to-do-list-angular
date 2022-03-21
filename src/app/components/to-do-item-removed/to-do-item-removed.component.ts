import {Component, Input, OnInit} from '@angular/core';
import {ToDoItemModel, ToDoItemStatus} from "../../domain/models/to-do-item.model";
import {Store} from "@ngrx/store";
import {ApplicationStore} from "../../store/store";
import {
  markItemAsCompleted,
  markItemAsCreated,
  markItemAsRemoved,
  updateToDoItem
} from "../../store/to-do/to-do.actions";
import {Update} from "@ngrx/entity";

@Component({
  selector: 'app-to-do-item-removed',
  templateUrl: './to-do-item-removed.component.html',
  styleUrls: ['./to-do-item-removed.component.scss']
})
export class ToDoItemRemovedComponent implements OnInit {

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
