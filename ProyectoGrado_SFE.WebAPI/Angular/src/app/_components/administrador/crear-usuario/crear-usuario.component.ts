import { Component, OnInit } from '@angular/core';
import { NuevoUsuarioViewModel } from '../../../nuevo-usuario-view-model';
import { UserRequestsService } from '../../../_services/user-requests.service';
//import { Http, Response } from '@angular/http';
import { Router } from "@angular/router";


@Component({
    selector: 'app-crear-usuario',
    templateUrl: './crear-usuario.component.html',
    styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
    public model: NuevoUsuarioViewModel = new NuevoUsuarioViewModel();
    public submitted: boolean;
    public errorMessage: string;
    constructor(private userRequestsService: UserRequestsService, private router: Router) { }

    ngOnInit() {        
    }


    onSubmit(form) {

        if (!form.valid) return;

        this.model.UserName = this.model.Email;

        this.submitted = true;
        console.log("Submit");
        console.log(form);
                
        this.userRequestsService.postNewUser(this.model)
            .map(response => response.json())
            .subscribe(data => {
                //console.log(data);
                if (data.success) this.router.navigate(['PanelControl']);
                else {                    
                    this.errorMessage = data.message;
                    console.log(this.errorMessage);
                }
            });
        //.catch(this.handleError);;
    }    

}
