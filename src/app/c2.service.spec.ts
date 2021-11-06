import { TestBed } from '@angular/core/testing';

import { C2Service } from './c2.service';

describe('C2Service', () => {
  let service: C2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(C2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
