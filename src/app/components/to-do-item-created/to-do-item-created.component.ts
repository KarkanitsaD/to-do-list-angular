import {Component, Input, OnInit} from '@angular/core';
import {ToDoItemModel, ToDoItemStatus} from "../../domain/models/to-do-item.model";
import {ApplicationStore} from "../../store/store";
import {Store} from "@ngrx/store";
import {markItemAsCompleted, markItemAsRemoved} from "../../store/to-do/to-do.actions";

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
    this.store$.dispatch(markItemAsCompleted({id: this.toDoItem.id}));
  }

  markAsRemoved(): void {
    this.store$.dispatch(markItemAsRemoved({id: this.toDoItem.id}));
  }
}
