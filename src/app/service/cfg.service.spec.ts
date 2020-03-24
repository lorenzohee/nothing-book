import { TestBed } from '@angular/core/testing';

import { CfgService } from './cfg.service';

describe('CfgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CfgService = TestBed.get(CfgService);
    expect(service).toBeTruthy();
  });
});
