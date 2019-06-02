import {Component, OnDestroy, OnInit} from '@angular/core';

import {PapaparseService} from '../../services/papaparse.service';
import { saveAs } from 'file-saver';
import {Router} from '@angular/router';

@Component({
  selector: 'app-csv-data-displayer',
  templateUrl: './csv-data-displayer.component.html',
  styleUrls: ['./csv-data-displayer.component.scss']
})
export class CsvDataDisplayerComponent implements OnInit, OnDestroy {

  constructor(
    private papaService: PapaparseService,
    private router: Router
  ) { }

  csvData: string[][];
  getDataSubscription;

  ngOnInit() {
    this.getDataSubscription = this.papaService.getCsvData()
      .subscribe(csvData => {
        this.csvData = csvData;
        console.log(this.csvData);
      });
  }

  downloadCSV() {
    const blob = new Blob([this.parseJSONtoCSV()], { type: 'text/csv' });
    const title = 'Time_Bookings_' + new Date().toLocaleDateString();
    saveAs(blob, title + '.csv');
    this.router.navigateByUrl('/');
  }

  getTableHeaders() {
    return this.csvData[0];
  }

  getTableBody() {
    return this.csvData.filter((rows, index) => {
      return index !== 0;
    });
  }

  parseJSONtoCSV() {
    return this.papaService.unparseData(this.csvData);
  }

  ngOnDestroy(): void {
    this.getDataSubscription.unsubscribe();
  }

}
