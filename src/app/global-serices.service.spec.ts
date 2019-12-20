import { TestBed } from '@angular/core/testing';

import { GlobalSericesService } from './global-serices.service';

describe('GlobalSericesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalSericesService = TestBed.get(GlobalSericesService);
    expect(service).toBeTruthy();
  });
});
