import {Module, HttpModule, HttpService} from '@nestjs/common';
import {RequestService} from './request.service';

@Module({
    imports: [
        HttpModule.register({
            timeout: 5000,
            maxRedirects: 5,
        }),
    ],
    providers: [RequestService],
    exports: [HttpModule]
})
export class RequestModule {
}
