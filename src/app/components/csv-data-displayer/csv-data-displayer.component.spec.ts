import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvDataDisplayerComponent } from './csv-data-displayer.component';

describe('CsvDataDisplayerComponent', () => {
  let component: CsvDataDisplayerComponent;
  let fixture: ComponentFixture<CsvDataDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvDataDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvDataDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
