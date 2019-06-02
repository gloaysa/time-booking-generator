import {Component, OnDestroy, OnInit} from '@angular/core';

import {PapaparseService} from '../../services/papaparse.service';

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

  ngOnDestroy(): void {
    this.getDataSubscription.unsubscribe();
  }

}
