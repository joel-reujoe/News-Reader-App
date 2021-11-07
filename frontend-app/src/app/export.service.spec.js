import { TestBed } from '@angular/core/testing';
import { ExportService } from './export.service';
describe('ExportService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ExportService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=export.service.spec.js.map