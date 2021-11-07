import { TestBed } from '@angular/core/testing';
import { AuthServiceService } from './auth-service.service';
describe('AuthServiceService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AuthServiceService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=auth-service.service.spec.js.map