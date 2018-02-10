import { Component, OnInit } from '@angular/core';
import { UserRequestsService } from '../../../_services/user-requests.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Response } from '@angular/http';
import { GenerarFirmaElectronicaModel } from '../../../_classes/generar-firma-electronica-model';

@Component({
    selector: 'app-generar-firma-electronica',
    templateUrl: './generar-firma-electronica.component.html',
    styleUrls: ['./generar-firma-electronica.component.css']
})
export class GenerarFirmaElectronicaComponent implements OnInit {

    public myForm = new FormGroup({
        ClaveId: new FormControl(),
        Archivo: new FormControl(),
        Password: new FormControl(),
    });

    public file: any;
    public fileName: string;

    private sub: any;
    public availableKeys;
    public submitted: boolean;

    constructor(private userRequestsService: UserRequestsService, private _fb: FormBuilder) { }

    ngOnInit() {
        this.userRequestsService.getAvailableSigningKeys().subscribe(data => {
            console.log(data);
            this.availableKeys = data;
        });;
    }

    onChange(event) {
        console.log(event.srcElement.files[0]);
        this.file = event.srcElement.files[0];
        this.fileName = this.file.name;
    }
    onSubmit(model, isValid: boolean) {

        let reqModel = new GenerarFirmaElectronicaModel(model.ClaveId, this.file, model.Password);

        console.log(reqModel);

        model.Archivo = this.file;
        this.submitted = true;
        console.log("Submit");
        this.userRequestsService.postGenerarFirmaElectronica(model)
            .subscribe(data => this.downloadFile(data)),//console.log(data),
            error => console.log("Error downloading the file."),
            () => console.info("OK");

            //.toPromise()
            //.then(this.extractData)
            //.catch(this.handleError);;
    }

    downloadFile(data: Response) {  
        var fileName = this.getFileNameFromHttpResponse(data);
        var headers = data.headers;
        //console.log(headers); //<--- Check log for content disposition
        var contentDisposition = headers.get('content-disposition');

        console.log(contentDisposition);

        var blob = new Blob([data.blob()], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);

        let a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    getFileNameFromHttpResponse(httpResponse: Response) {
        var contentDispositionHeader = httpResponse.headers.get('content-disposition');
        console.log(contentDispositionHeader);
        var result = contentDispositionHeader.split(';')[1].trim().split('=')[1];
        return result.replace(/"/g, '');
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    //get diagnostic() { return JSON.stringify(this.model); }


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


