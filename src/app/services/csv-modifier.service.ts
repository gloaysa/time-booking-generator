import {Injectable} from '@angular/core';

import {PapaparseService} from './papaparse.service';

@Injectable({
  providedIn: 'root'
})
export class CsvModifierService {
  HEADERS = [
    'Hours On-Site',
    'Hours Off-Site',
    'Name of employee',
    'Date',
    'PT',
    'Module (Product)',
    'Role',
    'Comment',
    'Dayrate',
    'Supplier',
    'Euro'
  ];

  private table: string[][];

  constructor(private papaService: PapaparseService) {
    this.papaService.getCsvData()
      .subscribe(csvData => this.table = csvData);
  }

  static isThisHourOnSite(hours) {
    return !!hours.match(/remote/);
  }

  static changeDate(date) {
    return new Date(date).toLocaleDateString('es-ES').replace(/\//g, '.');
  }

  static splitOnSiteAndOffSiteHours(row) {
    const hour = row[5];

    if (CsvModifierService.isThisHourOnSite(row[4])) {
      row[1] = hour; // Off-site
      row[0] = ''; // On-site
    } else {
      row[0] = hour; // On-site
      row[1] = ''; // Off-site
    }
  }

  createTable(name, product, role, supplier, onRemoteHours): void {
      this.table.map(row => {
        const date = CsvModifierService.changeDate(row[0]);
        onRemoteHours ? CsvModifierService.splitOnSiteAndOffSiteHours(row) : this.noSplitHours(row);

        row[2] = name; // Name of employee
        row[3] = date; // Date
        row[4] = ''; // PT
        row[5] = product; // Product
        row[6] = role; // Role
        row[7] = ''; // Comment
        row[8] = ''; // DayRate
        row[9] = supplier; // Supplier
        row[10] = ''; // Euro

        if (!onRemoteHours) { row.shift(); }

      });
      if (!onRemoteHours) { this.HEADERS.shift(); }
      this.table.unshift(this.HEADERS);

      this.papaService.addCsvData(this.table);
  }

  private noSplitHours(row) {
    this.HEADERS[1] = 'Hours';
    row[1] = row[5];
  }
}
