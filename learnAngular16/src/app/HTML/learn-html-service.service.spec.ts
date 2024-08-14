import { TestBed } from '@angular/core/testing';

import { LearnHtmlServiceService } from './learn-html-service.service';

describe('LearnHtmlServiceService', () => {
  let service: LearnHtmlServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearnHtmlServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
