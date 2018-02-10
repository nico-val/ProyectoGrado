import { Component, OnInit } from '@angular/core';
import { UserRequestsService } from '../_services/user-requests.service';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

@Component({
    selector: 'app-clave-detalles',
    templateUrl: './clave-detalles.component.html',
    styleUrls: ['./clave-detalles.component.css']
})
export class ClaveDetallesComponent implements OnInit {

    id: number;
    private sub: any;
    public keyDetails: any = {};

    constructor(private userRequestsService: UserRequestsService, private route: ActivatedRoute) { }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number

            this.userRequestsService.getKeyDetails(this.id).subscribe(data => {
                console.log(data);
                this.keyDetails = data;
            });;

            // In a real app: dispatch action to load the details here.
        });



    }

    descargarCertificado() {
        this.userRequestsService.getDescargarCertificado(this.id)
            .subscribe(data => this.downloadFile(data)),//console.log(data),
            error => console.log("Error downloading the file."),
            () => console.info("OK");
    }

    downloadFile(data: Response) {

        var headers = data.headers;
        console.log("headers"); //<--- Check log for content disposition
        console.log(headers); //<--- Check log for content disposition
        var fileName = this.getFileNameFromHttpResponse(data);
        
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

}
