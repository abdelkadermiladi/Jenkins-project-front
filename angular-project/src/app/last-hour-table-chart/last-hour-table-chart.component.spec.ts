import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastHourTableChartComponent } from './last-hour-table-chart.component';

describe('LastHourTableChartComponent', () => {
  let component: LastHourTableChartComponent;
  let fixture: ComponentFixture<LastHourTableChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastHourTableChartComponent]
    });
    fixture = TestBed.createComponent(LastHourTableChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
