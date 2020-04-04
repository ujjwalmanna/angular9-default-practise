import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor{
  // tslint:disable-next-line: max-line-length
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('request is its on way.');
    // tslint:disable-next-line: variable-name
    const modified_Req = req.clone({headers: req.headers.append('auth','some value')});
    return next.handle(modified_Req).pipe(tap(event=>{
      if(event.type === HttpEventType.Response)
      {
        console.log('response arrived');
        console.log(event.body);
      }
    }));
  }

  constructor() { }
}
