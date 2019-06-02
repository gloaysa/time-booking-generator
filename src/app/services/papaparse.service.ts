import { Papa } from 'ngx-papaparse';
import {Injectable} from '@angular/core';
import {ParsedCSVModel} from '../models/ParsedCSV.model';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class PapaparseService {
  constructor(private papa: Papa) {}

  data: Subject<Array<string>> = new Subject();

  unparseConfigDefault = {
    delimiter: ';',
    skipEmptyLines: true
  };

  getData(): Observable<Array<string>> {
    return this.data.asObservable();
  }

  readCSVFile(file: File) {
    const reader: FileReader = new FileReader();
    reader.onload = () => {
      this.parseCSVFile(reader.result);
    };
    reader.readAsText(file);
  }

  async parseCSVFile(csvData): Promise<void> {
    await this.papa.parse(csvData, {
      header: false,
      skipEmptyLines: true,
      complete: (result: ParsedCSVModel) => this.data.next(result.data),
      error(errors) {
        console.error('error processing CSV file:', errors);
      }
    });
  }

  unparseData(data, config = this.unparseConfigDefault) {
    return this.papa.unparse(data, config);
  }
}
