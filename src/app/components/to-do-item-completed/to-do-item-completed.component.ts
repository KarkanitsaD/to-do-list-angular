import {Component, Input, OnInit} from '@angular/core';
import {ToDoItemModel} from "../../domain/models/to-do-item.model";
import {markItemAsCreated, markItemAsRemoved} from "../../store/to-do/to-do.actions";
import {Store} from "@ngrx/store";
import {ApplicationStore} from "../../store/store";

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
    this.store$.dispatch(markItemAsRemoved({id: this.toDoItem.id}));
  }

  markAsCreated(): void {
    this.store$.dispatch(markItemAsCreated({id: this.toDoItem.id}));
  }
}
