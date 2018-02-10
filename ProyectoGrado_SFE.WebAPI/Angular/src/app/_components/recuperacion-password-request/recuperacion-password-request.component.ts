import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserRequestsService } from '../../_services/user-requests.service';

@Component({
  selector: 'app-recuperacion-password-request',
  templateUrl: './recuperacion-password-request.component.html',
  styleUrls: ['./recuperacion-password-request.component.css']
})
export class RecuperacionPasswordRequestComponent implements OnInit {

    public submitted: boolean;
    public success: boolean;
    public emailModel: string;

    constructor(private userRequestsService: UserRequestsService) { }

    ngOnInit() {
    }

    submit() {

        this.submitted = true;

        this.userRequestsService.postForgotPasswordRequest(this.emailModel)
            .map(response => response.json())
            .subscribe(data => {
                this.success = data.success;
            });
    }
}
