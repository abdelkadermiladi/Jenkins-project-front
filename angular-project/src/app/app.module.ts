import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JobTableComponent } from './job-table/job-table.component';

import { BarChartComponent } from './bar-chart/bar-chart.component';
import { TimeRangePickerComponent } from './time-range-picker/time-range-picker.component';
import { FormsModule } from '@angular/forms';
import { JobTableRangeComponent } from './job-table-range/job-table-range.component';

@NgModule({
  declarations: [
    AppComponent,
    JobTableComponent,
    JobTableRangeComponent,
    BarChartComponent,
    TimeRangePickerComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
