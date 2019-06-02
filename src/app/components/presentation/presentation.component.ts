import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { saveAs } from 'file-saver';


@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent  {

  constructor(private http: HttpClient) {}

  downloadExample() {
    this.http.get('/assets/csvExample/hoursExample.csv', {responseType: 'text'})
      .subscribe(data => {
        const blob = new Blob([data], { type: 'text/csv' });
        saveAs(blob, 'NavisionHoursExample.csv');
      });
  }
}
