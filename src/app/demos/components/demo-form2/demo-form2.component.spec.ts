import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoForm2Component } from './demo-form2.component';

describe('DemoForm2Component', () => {
  let component: DemoForm2Component;
  let fixture: ComponentFixture<DemoForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
