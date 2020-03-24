import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfgFormComponent } from './cfg-form.component';

describe('CfgFormComponent', () => {
  let component: CfgFormComponent;
  let fixture: ComponentFixture<CfgFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfgFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
