import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Router } from "@angular/router";

@Injectable()
export class AuthenticationService {

    public AuthToken: string;
    public UserName: string;
    public Role: string;
    public IsLoggedIn: boolean;

    constructor(private http: Http, private router: Router) {
        // set token if saved in local storage        
        try {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));            
        }
        catch (e) { console.log(e); }

        console.log(currentUser);

        if (currentUser != null) {
            this.AuthToken = currentUser.auth_token;
            this.UserName = currentUser.username;
            this.Role = currentUser.role;
            this.IsLoggedIn = true;
        }
        else this.IsLoggedIn = false;
    }

    LogIn(username: string, password: string) {

        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        let options = new RequestOptions({ headers: headers });

        return this.http.post(
            'http://localhost:5000/api/auth/login',
            JSON.stringify({ userName: username, password: password }),
            options
        )
            .map(response => {
                var res = response.json();
                if (res.success && res.auth_token) {

                    this.AuthToken = res.auth_token;

                    if (!res.twostep_required) {
                        console.log("storing");
                        console.log(res);
                        localStorage.setItem('currentUser', JSON.stringify(res));
                        this.UserName = res.username;
                        this.Role = res.role;
                        this.IsLoggedIn = true;
                    }

                    return { twostep_required: res.twostep_required };

                }
                else return res;



            });
        //.map((response: Response) => {              
        //    // login successful if there's a jwt token in the response              
        //    let user = response.json();              
        //    if (user && user.auth_token) {
        //        // store user details and jwt token in local storage to keep user logged in between page refreshes                  
        //        this.AuthToken = user.auth_token;                  
        //    }
        //    if (!user.twostep_required) {
        //        localStorage.setItem('currentUser', JSON.stringify(user));
        //        this.UserName = user.username;
        //        this.Role = user.role;
        //        this.IsLoggedIn = true;
        //    }

        //    return { twostep_required: user.twostep_required };
        //});
    }

    SendTwoStepCode(code: number) {

        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append('Authorization', `Bearer ${this.AuthToken}`)

        let options = new RequestOptions({ headers: headers });


        return this.http.post(
            'http://localhost:5000/api/auth/login/2fa',
            JSON.stringify({ code: code }),
            options
        )
            .map((response: Response) => {
                // login successful if there's a jwt token in the response              

                let res = response.json();

                if (res.success) {

                    if (res && res.auth_token) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentUser', JSON.stringify(res));

                        console.log("res");
                        console.log(res);

                        this.AuthToken = res.auth_token;
                        this.UserName = res.username;
                        this.Role = res.role;
                        this.IsLoggedIn = true;
                        
                    }
                }
                return res;
            });
    }

    LogOut() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');

        this.AuthToken = null;
        this.Role = null;
        this.UserName = null;
        this.IsLoggedIn = false;

        this.router.navigate(['Login']);


    }
}
