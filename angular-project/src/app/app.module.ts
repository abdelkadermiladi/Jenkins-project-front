import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TimeRangePickerComponent } from './time-range-picker/time-range-picker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LastJobTableComponent } from './last-job-table/last-job-table.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    TimeRangePickerComponent,
    LastJobTableComponent,
    AuthenticationComponent,
    HomePageComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule, 
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
