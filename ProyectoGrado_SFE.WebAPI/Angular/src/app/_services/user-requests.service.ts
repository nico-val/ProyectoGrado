import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { AuthenticationService } from './authentication.service';
import { NuevaClave } from '../nuevaClave';
import { GenerarFirmaElectronicaModel } from '../_classes/generar-firma-electronica-model';
import { VerificarFirmaElectronicaModel } from '../_classes/verificar-firma-electronica-model';
import { HttpService } from './http.service';

import { NuevoUsuarioViewModel } from '../nuevo-usuario-view-model';

@Injectable()
export class UserRequestsService {

    constructor(
        private http: HttpService,
        private authenticationService: AuthenticationService) {
    }

    postCambiarPassword(model) {
        return this.http.post('http://localhost:5000/api/PanelControl/CambiarPassword', model)
            .map((response: Response) => response.json());
    }

    getNewTotpSecret() {
        return this.http.get('http://localhost:5000/api/PanelControl/nuevoSecretoTotp').map((response: Response) => response.json());
    }

    postNewTotpSecret(secret: string, code: number) {
        var body = { secret: secret, code: code };
        return this.http.post('http://localhost:5000/api/PanelControl/nuevoSecretoTotp', body).map((response: Response) => response.json());
    }

    getMyKeys() {
        return this.http.get('http://localhost:5000/api/Claves').map((response: Response) => response.json());
    }

    getKeyDetails(id) {
        return this.http.get('http://localhost:5000/api/Claves/' + id ).map((response: Response) => response.json());

    }
    postNewKey(model: NuevaClave) {
        return this.http.post('http://localhost:5000/api/Claves', model);
    }

    getAvailableSigningKeys() {
        return this.http.get('http://localhost:5000/api/FirmaElectronica/ClavesDisponibles').map((response: Response) => response.json());
    }

    postGenerarFirmaElectronica(model: GenerarFirmaElectronicaModel) {

        //let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.AuthToken });
        //headers.append("Content-Type", "multipart/form-data");
        //let reqOptions = new RequestOptions({ headers: headers });
        //reqOptions.responseType = ResponseContentType.Blob;

        var input = new FormData();
        input.append('ClaveId', model.ClaveId);
        input.append('Archivo', model.Archivo);
        input.append('Password', model.Password);

        return this.http.post('http://localhost:5000/api/FirmaElectronica/Generar', input, { responseType: ResponseContentType.Blob });
    }

    postVerificarFirmaElectronica(model: VerificarFirmaElectronicaModel) {
        var input = new FormData();        
        input.append('Archivo', model.Archivo);
        input.append('ArchivoFirmaElectronica', model.ArchivoFirmaElectronica);

        return this.http.post('http://localhost:5000/api/FirmaElectronica/Verificar', input)
            .map((response: Response) => response.json());
    }

    getDescargarCertificado(id: number) {
        return this.http.get('http://localhost:5000/api/Claves/' + id + '/Certificado', { responseType: ResponseContentType.Blob });
    }

    ///////

    getClavesNoCertificadas() {
        return this.http.get('http://localhost:5000/api/AprobacionSolicitudes').map((response: Response) => response.json());
    }

    getSolicitudAprobacion(id) {
        return this.http.get('http://localhost:5000/api/AprobacionSolicitudes/' + id).map((response: Response) => response.json());
    }

    aprobarSolicitudAprobacion(id) {
        return this.http.patch('http://localhost:5000/api/AprobacionSolicitudes/' + id, {aprobado: true});
    }

    rechazarSolicitudAprobacion(id) {
        return this.http.patch('http://localhost:5000/api/AprobacionSolicitudes/' + id, { aprobado: false });
    }


    //////////

    getListaSolicitudesCertificacion() {
        return this.http.get('http://localhost:5000/api/SolicitudesCertificacion').map((response: Response) => response.json());
    }

    getSolicitudCertificacion(id: number) {
        return this.http.get('http://localhost:5000/api/SolicitudesCertificacion/'+ id).map((response: Response) => response.json());
    }

    getDescargarCSR(id: number) {
        return this.http.get('http://localhost:5000/api/SolicitudesCertificacion/' + id + '/DescargarCSR', { responseType: ResponseContentType.Blob });
    }

    patchCertificado(id: number, certificado) {
        var input = new FormData();        
        input.append('certificado', certificado);

        return this.http.patch('http://localhost:5000/api/SolicitudesCertificacion/' + id, input );
    }









    postNewUser(model: NuevoUsuarioViewModel) {
        return this.http.post('http://localhost:5000/api/Usuarios', model);
    }

    getAuditoriaFirmasElectronicas() {
        return this.http.get('http://localhost:5000/api/Auditoria/FirmasElectronicas/').map((response: Response) => response.json());
    }

    getUsuarios() {
        return this.http.get('http://localhost:5000/api/Usuarios/').map((response: Response) => response.json());
    }




    postForgotPasswordRequest(email: string) {
        return this.http.post('http://localhost:5000/api/Account/ForgotPassword_Request', { Email : email });
    }

    postForgotPassword(model: any) {
        return this.http.post('http://localhost:5000/api/Account/ForgotPassword', model);
    }
}
