import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BooksFormComponent } from './books-form.component';

describe('BooksFormComponent', () => {
  let component: BooksFormComponent;
  let fixture: ComponentFixture<BooksFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BooksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
