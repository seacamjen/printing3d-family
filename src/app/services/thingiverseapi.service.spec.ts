import { TestBed } from '@angular/core/testing';

import { ThingiverseapiService } from './thingiverseapi.service';

describe('ThingiverseapiService', () => {
  let service: ThingiverseapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThingiverseapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
