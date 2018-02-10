import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http'
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterModule, Routes, UrlSegment } from '@angular/router';
import { ClavesComponent } from './claves/claves.component';
import { NuevoParClavesComponent } from './nuevo-par-claves/nuevo-par-claves.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AlertService, AuthenticationService, UserRequestsService, HttpService} from './_services/index';
import { ClaveDetallesComponent } from './clave-detalles/clave-detalles.component';
import { GenerarFirmaElectronicaComponent } from './_components/firma-electronica/generar-firma-electronica/generar-firma-electronica.component';
import { VerificarFirmaElectronicaComponent } from './_components/firma-electronica/verificar-firma-electronica/verificar-firma-electronica.component';
import { AprobacionSolicitudesComponent } from './_components/aprobacion-solicitudes/aprobacion-solicitudes.component';
import { DetalleSolicitudAprobacionComponent } from './_components/detalle-solicitud-aprobacion/detalle-solicitud-aprobacion.component';
import { ListaSolicitudesCertificacionComponent } from './_components/certificacion/lista-solicitudes-certificacion/lista-solicitudes-certificacion.component';
import { DetalleSolicitudCertificacionComponent } from './_components/certificacion/detalle-solicitud-certificacion/detalle-solicitud-certificacion.component';
import { PanelControlComponent } from './_components/panel-control/panel-control.component';
import { CambioPasswordComponent } from './_components/cambio-password/cambio-password.component';
import { ConfiguracionCodigoTemporalComponent } from './_components/panel-control/configuracion-codigo-temporal/configuracion-codigo-temporal.component';
import { QRCodeModule } from '../../node_modules/angular2-qrcode';
import { CrearUsuarioComponent } from './_components/administrador/crear-usuario/crear-usuario.component';
import { AuditoriaFirmasElectronicasComponent } from './_components/administrador/auditoria-firmas-electronicas/auditoria-firmas-electronicas.component';
import { ListaUsuariosComponent } from './_components/administrador/lista-usuarios/lista-usuarios.component';
import { RecuperacionPasswordComponent } from './_components/recuperacion-password/recuperacion-password.component';
import { RecuperacionPasswordRequestComponent } from './_components/recuperacion-password-request/recuperacion-password-request.component'


const appRoutes: Routes = [
    { path: 'Claves', component: ClavesComponent },
    { path: 'Login', component: LoginFormComponent },
    { path: 'Claves/NuevoPar', component: NuevoParClavesComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'Claves/:id', component: ClaveDetallesComponent },
    { path: 'FirmaElectronica/Generar', component: GenerarFirmaElectronicaComponent },
    { path: 'FirmaElectronica/Verificar', component: VerificarFirmaElectronicaComponent },

    { path: 'AprobacionClavesNoCertificadas', component: AprobacionSolicitudesComponent },
    { path: 'AprobacionClavesNoCertificadas/:id', component: DetalleSolicitudAprobacionComponent },

    { path: 'SolicitudesCertificacion', component: ListaSolicitudesCertificacionComponent },
    { path: 'SolicitudesCertificacion/:id', component: DetalleSolicitudCertificacionComponent },

    { path: 'PanelControl', component: PanelControlComponent },
    { path: 'PanelControl/CambioPassword', component: CambioPasswordComponent },
    { path: 'PanelControl/ConfiguracionCodigoTemporal', component: ConfiguracionCodigoTemporalComponent },

    { path: 'Usuarios', component: ListaUsuariosComponent },
    { path: 'Usuarios/Crear', component: CrearUsuarioComponent },
    { path: 'AuditoriaFirmasElectronicas', component: AuditoriaFirmasElectronicasComponent },

    

    { path: 'RecuperacionPassword', component: RecuperacionPasswordRequestComponent },
    { path: 'RecuperacionPasswordConfirmacion', component: RecuperacionPasswordComponent },
    
    //{ path: 'crisis-center', component: CrisisListComponent },
    //{ path: 'hero/:id', component: HeroDetailComponent },
    //{
    //    path: 'heroes',
    //    component: HeroListComponent,
    //    data: { title: 'Heroes List' }
    //},
    //{
    //    path: '',
    //    redirectTo: '/heroes',
    //    pathMatch: 'full'
    //},
    //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
      ClavesComponent,
      NuevoParClavesComponent,
      LoginFormComponent,
      ClaveDetallesComponent,
      GenerarFirmaElectronicaComponent,
      VerificarFirmaElectronicaComponent,
      AprobacionSolicitudesComponent,
      DetalleSolicitudAprobacionComponent,
      ListaSolicitudesCertificacionComponent,
      DetalleSolicitudCertificacionComponent,
      PanelControlComponent,
      CambioPasswordComponent,
      ConfiguracionCodigoTemporalComponent,
      CrearUsuarioComponent,
      AuditoriaFirmasElectronicasComponent,
      ListaUsuariosComponent,
      RecuperacionPasswordComponent,
      RecuperacionPasswordRequestComponent,
      
  ],
  imports: [
      RouterModule.forRoot(appRoutes),
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      NgbModule.forRoot(),
      QRCodeModule
  ],
  providers: [
      AlertService,
      AuthenticationService,
      UserRequestsService,
      HttpService
      //{
      //    provide: HttpService,
      //    useFactory: (backend: XHRBackend, options: RequestOptions, router: Router, authenticationService: AuthenticationService) => {
      //        return new HttpService(backend, options, router, authenticationService);
      //    },
      //    deps: [XHRBackend, RequestOptions, Router, AuthenticationService]
      //}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

