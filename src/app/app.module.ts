import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CsvDataDisplayerComponent } from './components/csv-data-displayer/csv-data-displayer.component';
import {PapaparseService} from './services/papaparse.service';
import {PapaParseModule} from 'ngx-papaparse';
import {FormsModule} from '@angular/forms';
import { UserInputsComponent } from './components/user-inputs/user-inputs.component';
import {CsvModifierService} from './services/csv-modifier.service';

@NgModule({
  declarations: [
    AppComponent,
    CsvDataDisplayerComponent,
    UserInputsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PapaParseModule,
    FormsModule
  ],
  providers: [PapaparseService, CsvModifierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
