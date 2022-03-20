import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDoItemStatus} from "../../domain/models/to-do-item.model";

@Component({
  selector: 'app-to-do-item-actions',
  templateUrl: './to-do-item-actions.component.html',
  styleUrls: ['./to-do-item-actions.component.scss']
})
export class ToDoItemActionsComponent implements OnInit {

  @Input() actionToDisable: ToDoItemStatus = ToDoItemStatus.Created;

  @Output() onDeleteClick = new EventEmitter();
  @Output() onCompleteClick = new EventEmitter();
  @Output() onRefreshClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
