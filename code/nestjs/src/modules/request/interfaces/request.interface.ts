import {Observable} from "rxjs";
import {AxiosResponse, AxiosRequestConfig} from 'axios'

export interface RequestParams {
    method: string,
    path: string,
    config?: AxiosRequestConfig,
    body?: any
}

export interface Request {
    setBasePath(bastPath: string): void,

    getBasePath(): string,

    buildFullUrl(path: string): string,

    request(params: RequestParams): Observable<AxiosResponse<[]>>

}
