import {Component, OnDestroy, OnInit} from '@angular/core';

import {PapaparseService} from '../../services/papaparse.service';

@Component({
  selector: 'app-csv-data-displayer',
  templateUrl: './csv-data-displayer.component.html',
  styleUrls: ['./csv-data-displayer.component.scss']
})
export class CsvDataDisplayerComponent implements OnInit, OnDestroy {

  constructor(private papaService: PapaparseService) { }

  csvData: string[];
  getDataSubscription;

  ngOnInit() {
    this.getDataSubscription = this.papaService.getData()
      .subscribe((csvData) => this.csvData = csvData);
  }

  uploadFile($event) {
    const file = $event.target.files[0];
    this.papaService.readCSVFile(file);
  }

  ngOnDestroy(): void {
    this.getDataSubscription.unsubscribe();
  }

}
