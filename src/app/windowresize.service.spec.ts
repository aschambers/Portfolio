import { TestBed } from '@angular/core/testing';

import { WindowResizeService } from './windowresize.service';

describe('WindowresizeService', () => {
  let service: WindowResizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowResizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
