import {Injectable, HttpService} from '@nestjs/common';
import {AxiosResponse} from 'axios'
import {Observable} from 'rxjs';
import {Request, RequestParams} from './interfaces/request.interface'

@Injectable()
export class RequestService implements Request {
    private basePath: string;

    constructor(private httpService: HttpService) {

    }

    setBasePath(basePath: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        } else {
            throw 'basePath is required';
        }
    }

    getBasePath():string {
        return this.basePath;
    }

    buildFullUrl(path: string): string {
        if (this.basePath !== undefined) {
            return `${this.basePath}${path}`
        }
        return path;
    }


    request(request: RequestParams): Observable<AxiosResponse<[]>> {
        const url = this.buildFullUrl(request.path);
        const param: any = [url];
        if (request.body !== undefined) {
            param.push(request.body)
        }
        param.push(request.config);
        return this.httpService[request.method](...param);
    }

}
