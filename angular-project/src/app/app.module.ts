import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TimeRangePickerComponent } from './time-range-picker/time-range-picker.component';
import { FormsModule } from '@angular/forms';
import { LastHourTableChartComponent } from './last-hour-table-chart/last-hour-table-chart.component';
import { LastJobTableComponent } from './last-job-table/last-job-table.component';


@NgModule({
  declarations: [
    AppComponent,
    TimeRangePickerComponent,
    LastHourTableChartComponent,
    LastJobTableComponent,


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
