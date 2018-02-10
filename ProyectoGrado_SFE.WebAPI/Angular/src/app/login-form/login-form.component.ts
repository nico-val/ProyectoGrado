import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { AlertService } from '../_services/alert.service';

@Component({
    moduleId: module.id,
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


    model: any = {};
    loading = false;
    returnUrl: string;
    errorMessage: string;
    twoStepRequired: boolean;
    twoStepErrorMessage: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.LogOut();

        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.LogIn(this.model.username, this.model.password)
            .subscribe(
            data => {
                if (!data.success && data.message) {
                    this.errorMessage = data.message;
                    return;
                }
                if (data.twostep_required) {
                    this.twoStepRequired = true;
                }
                else {
                    switch (this.authenticationService.Role) {
                        case 'Usuario': this.router.navigate(["/Claves"]);
                            break;
                        case 'AutoridadCertificante': this.router.navigate(["/SolicitudesCertificacion"]);
                            break;
                        case 'AutoridadDeRegistro': this.router.navigate(["/AprobacionClavesNoCertificadas"]);
                            break;
                        case 'Administrador': this.router.navigate(["/Usuarios"]);
                            break;
                    }
                }

            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }

    sendTwoStepCode() {
        this.loading = true;
        this.authenticationService.SendTwoStepCode(this.model.twoStepCode)
            .subscribe(
            data => {
                if (data.success) {
                    console.log("this.authenticationService.Role: " + this.authenticationService.Role);
                    switch (this.authenticationService.Role) {                        
                        case 'Usuario': this.router.navigate(["/Claves"]);

                            break;
                        case 'AutoridadCertificante': this.router.navigate(["/SolicitudesCertificacion"]);
                            break;
                        case 'AutoridadDeRegistro': this.router.navigate(["/AprobacionClavesNoCertificadas"]);
                            break;

                    }
                }

                else {
                    console.log(data.message);
                    this.twoStepErrorMessage = data.message;
                }
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }
}