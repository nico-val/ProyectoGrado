import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserRequestsService } from '../../_services/user-requests.service';
@Component({
    selector: 'app-recuperacion-password',
    templateUrl: './recuperacion-password.component.html',
    styleUrls: ['./recuperacion-password.component.css']
})
export class RecuperacionPasswordComponent implements OnInit {

    public submitted: boolean;
    public success: boolean;
    public emailModel: string;
    
    public recoverModel: any = {};
    
    constructor(private userRequestsService: UserRequestsService, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            this.recoverModel.code = params['code'];
            this.recoverModel.email = params['email'];            
        });
    }

    submitRecoverModel() {
        this.submitted = true;

        this.userRequestsService.postForgotPassword(this.recoverModel)
            .map(response => response.json())
            .subscribe(data => {
                this.success = data.success;
            });
    }

}
