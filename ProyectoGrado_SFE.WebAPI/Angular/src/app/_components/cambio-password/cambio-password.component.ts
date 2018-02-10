import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserRequestsService } from '../../_services/user-requests.service';
import { HttpService } from '../../_services/http.service';
import { Http, Response } from '@angular/http';
import { Router } from "@angular/router";
@Component({
    selector: 'app-cambio-password',
    templateUrl: './cambio-password.component.html',
    styleUrls: ['./cambio-password.component.css'],
    providers: [UserRequestsService, HttpService]
})
export class CambioPasswordComponent implements OnInit {

    public myForm = new FormGroup({
        oldPassword: new FormControl(),
        newPassword: new FormControl(),
        confirmPassword: new FormControl(),
    });

    public submitted: boolean; // keep track on whether form is submitted
    public errorMessage: string;

    constructor(private router: Router, private http: Http, private _fb: FormBuilder, private userRequestsService: UserRequestsService) { }

    ngOnInit() {
    }

    onSubmit() {
        this.submitted = true;
        console.log("Submit");
        console.log(this.myForm.value);
        this.userRequestsService.postCambiarPassword(this.myForm.value)
            .subscribe(data => {
                if (data.success) this.router.navigate(['PanelControl']);
                else this.errorMessage = data.message;
            });

            //.catch(this.handleError);;
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    get diagnostic() { return JSON.stringify(this.myForm); }


    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    }
}
