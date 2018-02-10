import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../_services/authentication.service";
@Component({
    selector: 'nav',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    host: { 'class': 'navbar navbar-default navbar-fixed-side navbar-inverse' }
})
export class NavbarComponent implements OnInit {

    constructor(private router: Router, public authenticationService: AuthenticationService) { }

    ngOnInit() {
    }

    goMisClaves() {
        this.router.navigate(['Claves']);
    }

    goCrearNuevoParClaves() {
        this.router.navigate(['Claves/NuevoPar']);        
    }

    goGenerarFirmaElectronica() {
        this.router.navigate(['FirmaElectronica/Generar']);
    }

    goVerificarFirmaElectronica() {
        this.router.navigate(['FirmaElectronica/Verificar']);
    }

    logOut() {
        this.authenticationService.LogOut();
    }


}
