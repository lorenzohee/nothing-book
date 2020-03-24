import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfgListComponent } from './cfg-list.component';

describe('CfgListComponent', () => {
  let component: CfgListComponent;
  let fixture: ComponentFixture<CfgListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfgListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
