import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListPaginatorComponent } from '../list-paginator/list-paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPaginatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
