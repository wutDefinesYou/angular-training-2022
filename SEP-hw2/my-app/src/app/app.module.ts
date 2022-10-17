import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterSearchPipe } from './filter-search.pipe';
import { SortByAlphaPipe } from './sort-by-alpha.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterSearchPipe,
    SortByAlphaPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
