import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetrinaComponent } from './vetrina.component';

describe('VetrinaComponent', () => {
  let component: VetrinaComponent;
  let fixture: ComponentFixture<VetrinaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VetrinaComponent]
    });
    fixture = TestBed.createComponent(VetrinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
