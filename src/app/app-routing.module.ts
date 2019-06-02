import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserInputsComponent} from './components/user-inputs/user-inputs.component';
import {CsvDataDisplayerComponent} from './components/csv-data-displayer/csv-data-displayer.component';
import {PresentationComponent} from './components/presentation/presentation.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: PresentationComponent},
  {path: 'inputs', component: UserInputsComponent},
  {path: 'data', component: CsvDataDisplayerComponent},
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
