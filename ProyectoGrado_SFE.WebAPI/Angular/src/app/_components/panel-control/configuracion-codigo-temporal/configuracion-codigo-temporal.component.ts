import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserRequestsService } from '../../../_services/user-requests.service';
import { QRCodeComponent } from '../../../../../node_modules/angular2-qrcode';
import { AuthenticationService } from '../../../_services/authentication.service';
@Component({
  selector: 'app-configuracion-codigo-temporal',
  templateUrl: './configuracion-codigo-temporal.component.html',
  styleUrls: ['./configuracion-codigo-temporal.component.css']  
})
export class ConfiguracionCodigoTemporalComponent implements OnInit {

    constructor(private router: Router, private userRequestsService: UserRequestsService, private _authenticationService: AuthenticationService) { }

    public newSecret: string;
    public submitted: boolean;
    public model: any = {};
    public keyUri: string;
    ngOnInit() {

        this.userRequestsService.getNewTotpSecret()
            .subscribe(data => {                
                this.newSecret = data.secret;
                this.keyUri = `otpauth://totp/ProyectoGrado_SFE:${this._authenticationService.UserName}?secret=${this.newSecret.replace(/\s/g, '')}&issuer=ProyectoGrado_SFE`
            });

    }

    onSubmit() {
        this.submitted = true;
        console.log("Submit");
        console.log(this.model.code);
        this.userRequestsService.postNewTotpSecret(this.newSecret, this.model.code)
            .subscribe(data => {
                if (data.success) this.router.navigate(['PanelControl']);
            });
        //.catch(this.handleError);;
    }

    public appStoreImagePath: string = '/assets/img/app-store.jpg';
    public googlePlayImagePath: string = '/assets/img/google-play.png';

}
