import { Component, OnInit } from '@angular/core';
import { UserRequestsService } from '../../../_services/user-requests.service';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';
import { Router } from "@angular/router";

@Component({
    selector: 'app-detalle-solicitud-certificacion',
    templateUrl: './detalle-solicitud-certificacion.component.html',
    styleUrls: ['./detalle-solicitud-certificacion.component.css']
})
export class DetalleSolicitudCertificacionComponent implements OnInit {
    id: number;
    private sub: any;
    public data: any = {};

    constructor(private router: Router, private userRequestsService: UserRequestsService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number

            this.userRequestsService.getSolicitudCertificacion(this.id).subscribe(data => {
                console.log(data);
                this.data = data;
            });;

            // In a real app: dispatch action to load the details here.
        });
    }

    descargarCSR() {
        this.userRequestsService.getDescargarCSR(this.id)
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
        console.log(headers); //<--- Check log for content disposition
        var contentDisposition = headers.get('content-disposition');

        console.log(contentDisposition);
        console.log(data);
        var blob = new Blob([data.blob()], { type: 'application/x-msdownload' });
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

    public file: any;
    public fileName: string;

    onChange(event) {
        console.log(event.srcElement.files[0]);
        this.file = event.srcElement.files[0];
        this.fileName = this.file.name;
    }

    onSubmit() {



        //this.submitted = true;
        console.log("Submit");
        this.userRequestsService.patchCertificado(this.id, this.file)
            .subscribe(data => {
                var responseBody = data.json();
                if (data.ok && responseBody.success) this.router.navigate(['SolicitudesCertificacion']);
                else if (data.ok && !responseBody.success) this.certificateLoadingErrorMessage = responseBody.message;
            }),//console.log(data),
            error => console.log("Error downloading the file."),
            () => console.info("OK");

        //.toPromise()
        //.then(this.extractData)
        //.catch(this.handleError);;
    }

    public certificateLoadingErrorMessage: string;

}
