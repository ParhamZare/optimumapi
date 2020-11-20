import {Test, TestingModule} from '@nestjs/testing';
import {RequestService} from './request.service';
import {HttpModule} from "@nestjs/common";

describe('RequestService', () => {
    let service: RequestService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                HttpModule.register({
                    timeout: 5000,
                    maxRedirects: 5,
                }),
            ],
            providers: [RequestService],
            exports: [HttpModule]
        }).compile();

        service = module.get<RequestService>(RequestService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it("setBasePath should set basePath to / ", () => {
        service.setBasePath("/");
        expect(service.getBasePath()).toBe("/");
    })

});
