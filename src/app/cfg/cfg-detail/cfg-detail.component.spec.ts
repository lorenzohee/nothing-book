import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfgDetailComponent } from './cfg-detail.component';

describe('CfgDetailComponent', () => {
  let component: CfgDetailComponent;
  let fixture: ComponentFixture<CfgDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfgDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfgDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
