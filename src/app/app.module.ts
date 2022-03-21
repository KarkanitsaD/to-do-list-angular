import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoItemCreatedComponent } from './components/to-do-item-created/to-do-item-created.component';
import { ToDoItemCompletedComponent } from './components/to-do-item-completed/to-do-item-completed.component';
import { ToDoItemRemovedComponent } from './components/to-do-item-removed/to-do-item-removed.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToDoItemActionsComponent } from './components/to-do-item-actions/to-do-item-actions.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { StoreModule } from '@ngrx/store';
import {metaReducers, reducers} from "./store/store";
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    ToDoItemCreatedComponent,
    ToDoItemCompletedComponent,
    ToDoItemRemovedComponent,
    ToDoItemActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    MatTabsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
