import { Injectable } from '@angular/core';
import {
    Http,
    RequestOptions,
    RequestOptionsArgs,
    Response,
    Request,
    Headers,
    XHRBackend
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Router } from '@angular/router';
import { CustomRequestOptions } from '../_helpers/custom-request-options';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class HttpService extends Http {

    public token: string;
    apiUrl = 'http://localhost:5000/api/';

    constructor(backend: XHRBackend, defaultOptions: RequestOptions, private router: Router, private authService: AuthenticationService)
    {                
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        
        let token = this.authService.AuthToken;
        if (typeof url === 'string') { // meaning we have to add the token to the options, not in url
            if (!options) {
                // let's make option object
                options = { headers: new Headers() };
            }
            options.headers.set('Authorization', `Bearer ${token}`);
        } else {
            // we have to add the token to the url object
            url.headers.set('Authorization', `Bearer ${token}`);
        }
        return super.request(url, options).catch(this.catchErrors());
    }

    private catchErrors() {
        return (res: Response) => {
            if (res.status === 401 || res.status === 403) {
                //handle authorization errors
                //in this example I am navigating to logout route which brings the login screen
                this.authService.LogOut();
            }
            return Observable.throw(res);
        };
    }

    //private setHeaders(objectToSetHeadersTo: Request | RequestOptionsArgs) {
    //    //add whatever header that you need to every request
    //    //in this example I add header token by using authService that I've created
    //    objectToSetHeadersTo.headers.set('Token', this.authService.AuthToken);
    //}

}    