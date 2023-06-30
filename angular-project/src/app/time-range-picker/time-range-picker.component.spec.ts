import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeRangePickerComponent } from './time-range-picker.component';

describe('TimeRangePickerComponent', () => {
  let component: TimeRangePickerComponent;
  let fixture: ComponentFixture<TimeRangePickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeRangePickerComponent]
    });
    fixture = TestBed.createComponent(TimeRangePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
