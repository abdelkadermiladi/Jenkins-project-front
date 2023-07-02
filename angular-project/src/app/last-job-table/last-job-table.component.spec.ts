import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastJobTableComponent } from './last-job-table.component';

describe('LastJobTableComponent', () => {
  let component: LastJobTableComponent;
  let fixture: ComponentFixture<LastJobTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastJobTableComponent]
    });
    fixture = TestBed.createComponent(LastJobTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
