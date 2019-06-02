import {Component, OnDestroy, OnInit} from '@angular/core';

import {PapaparseService} from '../../services/papaparse.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-csv-data-displayer',
  templateUrl: './csv-data-displayer.component.html',
  styleUrls: ['./csv-data-displayer.component.scss']
})
export class CsvDataDisplayerComponent implements OnInit, OnDestroy {

  constructor(private papaService: PapaparseService) { }

  csvData: string[][];
  getDataSubscription;

  ngOnInit() {
    this.getDataSubscription = this.papaService.getCsvData()
      .subscribe(csvData => this.csvData = csvData);
  }

  downloadCSV() {
    const blob = new Blob([this.parseJSONtoCSV()], { type: 'text/csv' });
    const title = 'Time_Bookings_' + new Date().toLocaleDateString();
    saveAs(blob, title + '.csv');

  }

  parseJSONtoCSV() {
    return this.papaService.unparseData(this.csvData);
  }

  ngOnDestroy(): void {
    this.getDataSubscription.unsubscribe();
  }

}
