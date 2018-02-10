import { Component, OnInit } from '@angular/core';
import { UserRequestsService } from '../../_services/index';


@Component({
    selector: 'app-aprobacion-solicitudes',
    templateUrl: './aprobacion-solicitudes.component.html',
    styleUrls: ['./aprobacion-solicitudes.component.css']
})
export class AprobacionSolicitudesComponent implements OnInit {

    data: any = {};

    constructor(private userRequestsService: UserRequestsService) { }

    ngOnInit() {
        this.getClaves();
    }

    getData() {

        return this.userRequestsService.getClavesNoCertificadas();

        //return this.http.get('http://localhost:5000/api/Claves')
        //    .map((res: Response) => res.json());

    }

    getClaves() {

        this.getData().subscribe(data => {
            console.log(data);
            this.data = data;
        });

    }

}
