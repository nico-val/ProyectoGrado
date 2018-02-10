import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { NuevaClave } from '../nuevaClave';
import { UserRequestsService } from '../_services/user-requests.service';
@Component({
    selector: 'app-nuevo-par-claves',
    templateUrl: './nuevo-par-claves.component.html',
    styleUrls: ['./nuevo-par-claves.component.css']
})
export class NuevoParClavesComponent implements OnInit {
    /*
    public myForm = new FormGroup({
        NombreIdentificativo: new FormControl(),
        CommonName: new FormControl(),
        Organization: new FormControl(),
        OrganizationUnit: new FormControl(),
        City: new FormControl(),
        State: new FormControl(),
        CountryIso2Characters: new FormControl(),
        Email: new FormControl()
    });*/

    public submitted: boolean; // keep track on whether form is submitted
    public errorMessage: string;
    public events: any[] = []; // use later to display form changes


    public model: NuevaClave;    

   

    constructor(private router : Router, private http: Http, private _fb: FormBuilder, private userRequestsService: UserRequestsService) { }

    ngOnInit() {
        this.model = new NuevaClave();
        this.buildForm();
    }

    heroForm: FormGroup;

    buildForm(): void {
        this.heroForm = this._fb.group({
            'NombreIdentificativo': [this.model.NombreIdentificativo, [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(24)                
            ]
            ],
            //'alterEgo': [this.hero.alterEgo],
            //'power': [this.hero.power, Validators.required]
        });

        //this.heroForm.valueChanges
        //    .subscribe(data => this.onValueChanged(data));

        //this.onValueChanged(); // (re)set validation messages now
    }

    onSubmit(model) {
        
        console.log(model.value);

        if (!model.valid) return;
        
        this.submitted = true;        
        console.log("Submit");
        this.userRequestsService.postNewKey(model.value)
            .map(response => response.json())
            .subscribe(response => {
                if (response.success)
                    this.router.navigate(["/Claves"]);
                if (!response.success)
                    this.errorMessage = response.message;

            }, error => {

            });
            
        
            
            //.then(this.extractData)
            //.catch(this.handleError);;                    
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    get diagnostic() { return JSON.stringify(this.model); }


    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    }
}
