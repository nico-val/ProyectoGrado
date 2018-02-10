import { Component, OnInit } from '@angular/core';
import { VerificarFirmaElectronicaModel } from '../../../_classes/verificar-firma-electronica-model';
import { UserRequestsService } from '../../../_services/user-requests.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';



@Component({
    selector: 'app-verificar-firma-electronica',
    templateUrl: './verificar-firma-electronica.component.html',
    styleUrls: ['./verificar-firma-electronica.component.css']
})
export class VerificarFirmaElectronicaComponent implements OnInit {

    public file: any;
    public fileName: string;

    public digitalSignatureFile: any;
    public digitalSignatureFileName: string;

    public resultadoVerificacion: any;

    closeResult: string;

    constructor(private userRequestsService: UserRequestsService, private modalService: NgbModal) { }

    ngOnInit() {
    }

    onChangeArchivo(event) {
        console.log(event.srcElement.files);
        this.file = event.srcElement.files[0];
        this.fileName = this.file.name;
    }

    onChangeFirmaElectronica(event) {

        var re = /(?:\.([^.]+))?$/;

        var ext = re.exec(event.srcElement.files[0].name)[1];   // "txt"

        if (ext != "frm") {
            console.log("error");
            return;
        }
        

        console.log(event.srcElement.files[0]);        
        this.digitalSignatureFile = event.srcElement.files[0];
        this.digitalSignatureFileName = this.digitalSignatureFile.name;
    }

    onSubmit() {

        let reqModel = new VerificarFirmaElectronicaModel(this.file, this.digitalSignatureFile);

        console.log(reqModel);

        this.userRequestsService.postVerificarFirmaElectronica(reqModel)            
            .subscribe(data => {

                this.resultadoVerificacion = data;

            }),//console.log(data),
            error => console.log("Error downloading the file."),
            () => console.info("OK");

        //.toPromise()
        //.then(this.extractData)
        //.catch(this.handleError);;
    }


    

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

}
