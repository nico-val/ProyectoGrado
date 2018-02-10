import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UserRequestsService } from '../../../_services/index';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auditoria-firmas-electronicas',
    templateUrl: './auditoria-firmas-electronicas.component.html',
    styleUrls: ['./auditoria-firmas-electronicas.component.css']
})
export class AuditoriaFirmasElectronicasComponent implements OnInit {
    data: any = [];
    constructor(private http: Http, private userRequestsService: UserRequestsService, router: Router) {
        
    }

    ngOnInit() {
        this.getData();
    }

    getData() {

        return this.userRequestsService.getAuditoriaFirmasElectronicas()
            .subscribe(data => {
                console.log(data);
                this.data = data;
            });

        //return this.http.get('http://localhost:5000/api/Claves')
        //    .map((res: Response) => res.json());

    }


}
