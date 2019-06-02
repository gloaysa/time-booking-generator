import { Component } from '@angular/core';

import {CsvModifierService} from '../../services/csv-modifier.service';
import {PapaparseService} from '../../services/papaparse.service';

@Component({
  selector: 'app-user-inputs',
  templateUrl: './user-inputs.component.html',
  styleUrls: ['./user-inputs.component.scss']
})
export class UserInputsComponent {

  name = 'Guillermo Loaysa';
  product = 'Connect MB';
  role = 'DEV-FE';
  supplier = 'Novatec Consulting';
  onRemoteHours = true;
  loadedFile = false;

  constructor(
    private csvModifier: CsvModifierService,
    private papaService: PapaparseService
    ) {}

  uploadFile($event) {
    const file = $event.target.files[0];
    this.papaService.readCSVFile(file);
    this.loadedFile = true;
  }

  createTable() {
    this.csvModifier.createTable(
      this.name,
      this.product,
      this.role,
      this.supplier,
      this.onRemoteHours);
  }

}
