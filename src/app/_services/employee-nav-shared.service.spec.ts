/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmployeeNavSharedService } from './employee-nav-shared.service';

describe('Service: EmployeeNavShared', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeNavSharedService]
    });
  });

  it('should ...', inject([EmployeeNavSharedService], (service: EmployeeNavSharedService) => {
    expect(service).toBeTruthy();
  }));
});
