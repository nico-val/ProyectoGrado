import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UserRequestsService } from '../_services/index';
import { Router} from '@angular/router';
@Component({
    selector: 'app-claves',
    templateUrl: './claves.component.html',
    styleUrls: ['./claves.component.css']
})
export class ClavesComponent implements OnInit {

    data: any = {};

    constructor(private http: Http, private userRequestsService: UserRequestsService, router : Router) {
        console.log("Claves built");
        this.getClaves();
    }

    ngOnInit() {
    }


    getData() {

        return this.userRequestsService.getMyKeys();

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
