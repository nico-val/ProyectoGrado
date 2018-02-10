import { Component, OnInit } from '@angular/core';
import { UserRequestsService } from '../../../_services/index';

@Component({
    selector: 'app-lista-solicitudes-certificacion',
    templateUrl: './lista-solicitudes-certificacion.component.html',
    styleUrls: ['./lista-solicitudes-certificacion.component.css']
})
export class ListaSolicitudesCertificacionComponent implements OnInit {

    data: any = {};

    constructor(private userRequestsService: UserRequestsService) { }

    ngOnInit() {
        this.getClaves();
    }
    getData() {

        return this.userRequestsService.getListaSolicitudesCertificacion();

    }

    getClaves() {

        this.getData().subscribe(data => {
            console.log(data);
            this.data = data;
        });

    }

}
