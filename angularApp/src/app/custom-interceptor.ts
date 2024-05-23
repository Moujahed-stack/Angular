import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { finalize, mergeMap } from 'rxjs/operators';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const loadingBar = document.getElementById('loading-bar');
    if (loadingBar) {
      loadingBar.style.display = 'block';
      loadingBar.style.width = '0%';
      setTimeout(() => {
        loadingBar.style.width = '100%';
      }, 0);
    }
//remove the delay if you want ive just added it to see the loading bar
    return timer(1000).pipe( 
      mergeMap(() => next.handle(req)),
      finalize(() => {
        if (loadingBar) {
          loadingBar.style.width = '100%';
          setTimeout(() => {
            loadingBar.style.display = 'none';
          }, 400);
        }
      })
    );
  }
}
