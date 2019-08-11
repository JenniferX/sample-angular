import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HTTP_INTERCEPTORS
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {getEnvs} from './mockup-api/total-env';
import {env1n} from './mockup-api/env.1n';
import {env2n} from './mockup-api/env.2n';
import {env3n} from './mockup-api/env.3n';
import {env4n} from './mockup-api/env.4n';
import {env10} from './mockup-api/env.10';
import {env11} from './mockup-api/env.11';
import {env12} from './mockup-api/env.12';
import {env13} from './mockup-api/env.13';

@Injectable()

export class MockupBackendInterceptor implements HttpInterceptor {
    constructor() {}
    intercept(request, next: HttpHandler): Observable < HttpEvent < any >> {
        return of(null).pipe(() => {
            if (request.url.endsWith('mockup-api/env1n') && request.method === 'GET') {
                return of(new HttpResponse({status: 200, body: env1n}));
            } else if (request.url.endsWith('mockup-api/env2n') && request.method === 'GET') {
                return of(new HttpResponse({status: 200, body: env2n}));
            } else if (request.url.endsWith('mockup-api/env3n') && request.method === 'GET') {
                return of(new HttpResponse({status: 200, body: env3n}));
            } else if (request.url.endsWith('mockup-api/env4n') && request.method === 'GET') {
                return of(new HttpResponse({status: 200, body: env4n}));
            } else if (request.url.endsWith('mockup-api/env10') && request.method === 'GET') {
                return of(new HttpResponse({status: 200, body: env10}));
            } else if (request.url.endsWith('mockup-api/env11') && request.method === 'GET') {
                return of(new HttpResponse({status: 200, body: env11}));
            } else if (request.url.endsWith('mockup-api/env12') && request.method === 'GET') {
                return of(new HttpResponse({status: 200, body: env12}));
            } else if (request.url.endsWith('mockup-api/env13') && request.method === 'GET') {
                return of(new HttpResponse({status: 200, body: env13}));
            } else if (request.url.endsWith('mockup-api/total') && request.method === 'GET') {
                return of(new HttpResponse({status: 200, body: getEnvs}));
            }
        }, delay(500));
    }
}
export const MockBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: MockupBackendInterceptor,
    multi: true
};
