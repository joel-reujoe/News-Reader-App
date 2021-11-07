import { TestBed } from '@angular/core/testing';
import { APIServiceService } from './apiservice.service';
describe('APIServiceService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(APIServiceService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=apiservice.service.spec.js.map