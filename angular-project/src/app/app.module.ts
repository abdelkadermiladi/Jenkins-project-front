import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JobTableComponent } from './job-table/job-table.component';
import { JobTableRangeComponent } from './job-table-range/job-table-range.component';

@NgModule({
  declarations: [
    AppComponent,
    JobTableComponent,
    JobTableRangeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
