import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {ApplicationStore} from "./store/store";
import {completedItems, createdItems, removedItems} from "./store/to-do/to-do.selectors";
import {ToDoItemModel, ToDoItemStatus} from "./domain/models/to-do-item.model";
import {addToDoItem} from "./store/to-do/to-do.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do-list-angular';

  public createdItems$ = this.store$.select(createdItems);
  public completedItems$ = this.store$.select(completedItems);
  public removedItems$ = this.store$.select(removedItems);

  constructor
  (
    private store$: Store<ApplicationStore>,

  ) {}

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
}
