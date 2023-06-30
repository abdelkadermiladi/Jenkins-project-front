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
  jobBuilds: any[] = []; // Ajoutez cette ligne pour stocker les données des builds de travail

  constructor(private http: HttpClient) {}

  submitForm() {
    const dateData = { startTime: this.startTime, endTime: this.endTime };

    this.http.post<any[]>('http://localhost:8082/api/job-builds-by-time-range-picker', dateData)
    .subscribe(
      (response) => {
        console.log('Réponse du serveur :', response);
        this.jobBuilds = response; // Stockez les données renvoyées dans la propriété jobBuilds
      },
      (error) => {
        console.error('Erreur lors de la soumission du formulaire :', error);
      }
    );
  }
}
