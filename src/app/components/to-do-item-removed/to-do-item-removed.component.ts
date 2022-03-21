import {Component, Input, OnInit} from '@angular/core';
import {ToDoItemModel} from "../../domain/models/to-do-item.model";
import {Store} from "@ngrx/store";
import {ApplicationStore} from "../../store/store";
import {markItemAsCompleted, markItemAsCreated, markItemAsRemoved} from "../../store/to-do/to-do.actions";

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
    this.store$.dispatch(markItemAsCompleted({id: this.toDoItem.id}));
  }

  markAsCreated(): void {
    this.store$.dispatch(markItemAsCreated({id: this.toDoItem.id}));
  }

}
