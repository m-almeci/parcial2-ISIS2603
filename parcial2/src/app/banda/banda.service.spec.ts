/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { bandaService } from './banda.service';

describe('Service: Banda', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [bandaService]
    });
  });

  it('should ...', inject([bandaService], (service: bandaService) => {
    expect(service).toBeTruthy();
  }));
});
