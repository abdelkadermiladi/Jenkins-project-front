import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-time-range-picker',
  templateUrl: './time-range-picker.component.html',
  styleUrls: ['./time-range-picker.component.css']
})
export class TimeRangePickerComponent {
  startTime!: string;
  endTime!: string;
  jobBuilds: any[] = [];
  DisplayTable: boolean = false;

  constructor(private http: HttpClient) {}

  submitForm() {
    const startDate = new Date(this.startTime);
    const endDate = new Date(this.endTime);

    const formattedStartDate = startDate.toISOString().slice(0, 16);
    const formattedEndDate = endDate.toISOString().slice(0, 16);

    const dateData = {
      startTime: formattedStartDate,
      endTime: formattedEndDate
    };

    this.http.post<any[]>('http://localhost:8082/api/job-builds-by-time-range-picker', dateData)
    .subscribe(
      (response) => {
        console.log('Réponse du serveur :', response);
        this.jobBuilds = response;
        this.DisplayTable = true;
      },
      (error) => {
        console.error('Erreur lors de la soumission du formulaire :', error);
      }
    );
  }
}
