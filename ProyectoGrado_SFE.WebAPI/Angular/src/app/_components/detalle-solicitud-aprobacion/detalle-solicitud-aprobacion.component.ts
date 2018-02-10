import { Component, OnInit } from '@angular/core';
import { UserRequestsService } from '../../_services/user-requests.service';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';
import { Router } from "@angular/router";

@Component({
    selector: 'app-detalle-solicitud-aprobacion',
    templateUrl: './detalle-solicitud-aprobacion.component.html',
    styleUrls: ['./detalle-solicitud-aprobacion.component.css']
})
export class DetalleSolicitudAprobacionComponent implements OnInit {

    id: number;
    private sub: any;
    public keyDetails: any = {};

    constructor(private router: Router, private userRequestsService: UserRequestsService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number

            this.userRequestsService.getSolicitudAprobacion(this.id).subscribe(data => {
                console.log(data);
                this.keyDetails = data;
            });;

            // In a real app: dispatch action to load the details here.
        });
    }

    aprobar() {
        this.userRequestsService.aprobarSolicitudAprobacion(this.id)
            .subscribe(data => {
                if (data.status == 200) this.router.navigate(['AprobacionClavesNoCertificadas']);
            });

    }

    rechazar() {
        this.userRequestsService.rechazarSolicitudAprobacion(this.id)
            .subscribe(data => {
                if (data.status == 200) this.router.navigate(['AprobacionClavesNoCertificadas']);
            });
    }

}
