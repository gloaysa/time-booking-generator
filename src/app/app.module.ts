import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CsvDataDisplayerComponent } from './components/csv-data-displayer/csv-data-displayer.component';
import {PapaparseService} from './services/papaparse.service';
import {PapaParseModule} from 'ngx-papaparse';

@NgModule({
  declarations: [
    AppComponent,
    CsvDataDisplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PapaParseModule
  ],
  providers: [PapaparseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
