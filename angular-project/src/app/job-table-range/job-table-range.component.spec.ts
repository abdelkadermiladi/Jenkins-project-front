import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTableRangeComponent } from './job-table-range.component';

describe('JobTableRangeComponent', () => {
  let component: JobTableRangeComponent;
  let fixture: ComponentFixture<JobTableRangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobTableRangeComponent]
    });
    fixture = TestBed.createComponent(JobTableRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
