import { TestBed } from '@angular/core/testing';

import { BooksFrontService } from './booksFront.service';

describe('BooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BooksFrontService = TestBed.get(BooksFrontService);
    expect(service).toBeTruthy();
  });
});
