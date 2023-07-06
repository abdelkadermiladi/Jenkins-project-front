import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeSelectorComponent } from './node-selector.component';

describe('NodeSelectorComponent', () => {
  let component: NodeSelectorComponent;
  let fixture: ComponentFixture<NodeSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NodeSelectorComponent]
    });
    fixture = TestBed.createComponent(NodeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
