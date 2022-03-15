import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListEntityComponent } from './list-entity/list-entity.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableEntityComponent } from './table-entity/table-entity.component';
import { FormEntityComponent } from './form-entity/form-entity.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEntityComponent,
    TableEntityComponent,
    FormEntityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
