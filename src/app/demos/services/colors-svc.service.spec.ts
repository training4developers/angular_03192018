import { TestBed, inject } from '@angular/core/testing';

import { ColorsSvcService } from './colors-svc.service';

describe('ColorsSvcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorsSvcService]
    });
  });

  it('should be created', inject([ColorsSvcService], (service: ColorsSvcService) => {
    expect(service).toBeTruthy();
  }));
});
