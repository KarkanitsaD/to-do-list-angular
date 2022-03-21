import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ApplicationStore} from "./store/store";
import {completedItems, createdItems, removedItems, selectAllItems} from "./store/to-do/to-do.selectors";
import {ToDoItemModel, ToDoItemStatus} from "./domain/models/to-do-item.model";
import {addToDoItem, clearToDoItems, setToDoItems} from "./store/to-do/to-do.actions";
import {ToDoItemService} from "./domain/services/to-do-item.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public createdItems$ = this.store$.select(createdItems);
  public completedItems$ = this.store$.select(completedItems);
  public removedItems$ = this.store$.select(removedItems);

  constructor
  (
    private store$: Store<ApplicationStore>,
    private toDoItemService: ToDoItemService
  ) {}

  ngOnInit() {
    let items = this.toDoItemService.getToDoState();
    this.store$.dispatch(setToDoItems({toDoItems: items}));
  }

  onAddToDoItem(input: any): void {
    let content = input.value;
    let toDoItem: ToDoItemModel = {
      id: Date.now().toString(),
      content: content,
      status: ToDoItemStatus.Created
    };
    this.store$.dispatch(addToDoItem({toDoItem: toDoItem}));
    input.value = null;
  }

  public saveState(): void {
    this.store$.select(selectAllItems).pipe(take(1)).subscribe(data => {
      this.toDoItemService.saveToDoState(data);
    });
  }

  public removeAllItems(): void {
    this.store$.dispatch(clearToDoItems());
  }
}
