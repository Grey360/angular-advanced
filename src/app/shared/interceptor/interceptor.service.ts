import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler):  Observable<HttpEvent<any>> {
    const OAUTH_TOKEN = 'GailorTOKEN';
    const reqHandler = req.clone({ setHeaders: {'Authorization': `token${OAUTH_TOKEN}`} });
    return next.handle(reqHandler);
  }
}
