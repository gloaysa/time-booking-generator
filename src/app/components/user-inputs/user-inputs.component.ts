import { Component } from '@angular/core';

import {CsvModifierService} from '../../services/csv-modifier.service';
import {PapaparseService} from '../../services/papaparse.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-inputs',
  templateUrl: './user-inputs.component.html',
  styleUrls: ['./user-inputs.component.scss']
})
export class UserInputsComponent {

  name;
  product;
  role;
  supplier;
  onRemoteHours;
  loadedFile = false;

  constructor(
    private csvModifier: CsvModifierService,
    private papaService: PapaparseService,
    private router: Router
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

    this.router.navigateByUrl('/data');
  }

}
