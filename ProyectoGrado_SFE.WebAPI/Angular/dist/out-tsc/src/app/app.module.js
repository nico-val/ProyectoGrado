"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var navbar_component_1 = require("./navbar/navbar.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var router_1 = require("@angular/router");
var claves_component_1 = require("./claves/claves.component");
var nuevo_par_claves_component_1 = require("./nuevo-par-claves/nuevo-par-claves.component");
var login_form_component_1 = require("./login-form/login-form.component");
var index_1 = require("./_services/index");
var clave_detalles_component_1 = require("./clave-detalles/clave-detalles.component");
var generar_firma_electronica_component_1 = require("./_components/firma-electronica/generar-firma-electronica/generar-firma-electronica.component");
var verificar_firma_electronica_component_1 = require("./_components/firma-electronica/verificar-firma-electronica/verificar-firma-electronica.component");
var aprobacion_solicitudes_component_1 = require("./_components/aprobacion-solicitudes/aprobacion-solicitudes.component");
var detalle_solicitud_aprobacion_component_1 = require("./_components/detalle-solicitud-aprobacion/detalle-solicitud-aprobacion.component");
var lista_solicitudes_certificacion_component_1 = require("./_components/certificacion/lista-solicitudes-certificacion/lista-solicitudes-certificacion.component");
var detalle_solicitud_certificacion_component_1 = require("./_components/certificacion/detalle-solicitud-certificacion/detalle-solicitud-certificacion.component");
var panel_control_component_1 = require("./_components/panel-control/panel-control.component");
var cambio_password_component_1 = require("./_components/cambio-password/cambio-password.component");
var configuracion_codigo_temporal_component_1 = require("./_components/panel-control/configuracion-codigo-temporal/configuracion-codigo-temporal.component");
var angular2_qrcode_1 = require("../../node_modules/angular2-qrcode");
var crear_usuario_component_1 = require("./_components/administrador/crear-usuario/crear-usuario.component");
var auditoria_firmas_electronicas_component_1 = require("./_components/administrador/auditoria-firmas-electronicas/auditoria-firmas-electronicas.component");
var lista_usuarios_component_1 = require("./_components/administrador/lista-usuarios/lista-usuarios.component");
var recuperacion_password_component_1 = require("./_components/recuperacion-password/recuperacion-password.component");
var recuperacion_password_request_component_1 = require("./_components/recuperacion-password-request/recuperacion-password-request.component");
var appRoutes = [
    { path: 'Claves', component: claves_component_1.ClavesComponent },
    { path: 'Login', component: login_form_component_1.LoginFormComponent },
    { path: 'Claves/NuevoPar', component: nuevo_par_claves_component_1.NuevoParClavesComponent },
    { path: 'login', component: login_form_component_1.LoginFormComponent },
    { path: 'Claves/:id', component: clave_detalles_component_1.ClaveDetallesComponent },
    { path: 'FirmaElectronica/Generar', component: generar_firma_electronica_component_1.GenerarFirmaElectronicaComponent },
    { path: 'FirmaElectronica/Verificar', component: verificar_firma_electronica_component_1.VerificarFirmaElectronicaComponent },
    { path: 'AprobacionClavesNoCertificadas', component: aprobacion_solicitudes_component_1.AprobacionSolicitudesComponent },
    { path: 'AprobacionClavesNoCertificadas/:id', component: detalle_solicitud_aprobacion_component_1.DetalleSolicitudAprobacionComponent },
    { path: 'SolicitudesCertificacion', component: lista_solicitudes_certificacion_component_1.ListaSolicitudesCertificacionComponent },
    { path: 'SolicitudesCertificacion/:id', component: detalle_solicitud_certificacion_component_1.DetalleSolicitudCertificacionComponent },
    { path: 'PanelControl', component: panel_control_component_1.PanelControlComponent },
    { path: 'PanelControl/CambioPassword', component: cambio_password_component_1.CambioPasswordComponent },
    { path: 'PanelControl/ConfiguracionCodigoTemporal', component: configuracion_codigo_temporal_component_1.ConfiguracionCodigoTemporalComponent },
    { path: 'Usuarios', component: lista_usuarios_component_1.ListaUsuariosComponent },
    { path: 'Usuarios/Crear', component: crear_usuario_component_1.CrearUsuarioComponent },
    { path: 'AuditoriaFirmasElectronicas', component: auditoria_firmas_electronicas_component_1.AuditoriaFirmasElectronicasComponent },
    { path: 'RecuperacionPassword', component: recuperacion_password_request_component_1.RecuperacionPasswordRequestComponent },
    { path: 'RecuperacionPasswordConfirmacion', component: recuperacion_password_component_1.RecuperacionPasswordComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            navbar_component_1.NavbarComponent,
            claves_component_1.ClavesComponent,
            nuevo_par_claves_component_1.NuevoParClavesComponent,
            login_form_component_1.LoginFormComponent,
            clave_detalles_component_1.ClaveDetallesComponent,
            generar_firma_electronica_component_1.GenerarFirmaElectronicaComponent,
            verificar_firma_electronica_component_1.VerificarFirmaElectronicaComponent,
            aprobacion_solicitudes_component_1.AprobacionSolicitudesComponent,
            detalle_solicitud_aprobacion_component_1.DetalleSolicitudAprobacionComponent,
            lista_solicitudes_certificacion_component_1.ListaSolicitudesCertificacionComponent,
            detalle_solicitud_certificacion_component_1.DetalleSolicitudCertificacionComponent,
            panel_control_component_1.PanelControlComponent,
            cambio_password_component_1.CambioPasswordComponent,
            configuracion_codigo_temporal_component_1.ConfiguracionCodigoTemporalComponent,
            crear_usuario_component_1.CrearUsuarioComponent,
            auditoria_firmas_electronicas_component_1.AuditoriaFirmasElectronicasComponent,
            lista_usuarios_component_1.ListaUsuariosComponent,
            recuperacion_password_component_1.RecuperacionPasswordComponent,
            recuperacion_password_request_component_1.RecuperacionPasswordRequestComponent,
        ],
        imports: [
            router_1.RouterModule.forRoot(appRoutes),
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            angular2_qrcode_1.QRCodeModule
        ],
        providers: [
            index_1.AlertService,
            index_1.AuthenticationService,
            index_1.UserRequestsService,
            index_1.HttpService
            //{
            //    provide: HttpService,
            //    useFactory: (backend: XHRBackend, options: RequestOptions, router: Router, authenticationService: AuthenticationService) => {
            //        return new HttpService(backend, options, router, authenticationService);
            //    },
            //    deps: [XHRBackend, RequestOptions, Router, AuthenticationService]
            //}
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map