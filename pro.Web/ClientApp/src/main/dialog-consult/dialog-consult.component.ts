import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { saveAs } from "file-saver";
import { IAgenda, IDecision, IHemodialisis, ILlegada, IPaciente, IPacienteImagen, IPago, IResponse, ISexo, ITransHemodialisis } from '../../interface/interface-pro.interface';
import { Message } from '../../message/message';
import { ServiceProService } from '../../service/service-pro.service';
import { Shared } from '../../shared/shared';
import { Snackbar } from '../../snackbar/snackbar';
import { DialogPaymentComponent } from '../dialog-payment/dialog-payment.component';

@Component({
  selector: 'app-dialog-consult',
  templateUrl: './dialog-consult.component.html',
  styleUrls: ['./dialog-consult.component.css']
})
export class DialogConsultComponent implements OnInit {

  iAgenda: IAgenda;
  inAgenda: IAgenda[] = [];

  iLlegada: ILlegada;
  inLlegada: ILlegada[] = [];

  iPago: IPago;
  inPago: IPago[] = [];

  iPaciente: IPaciente;
  inPaciente: IPaciente[] = [];

  iPacienteImagen: IPacienteImagen;
  inPacienteImagen: IPacienteImagen[] = [];

  iSexo: ISexo;
  inSexo: ISexo[] = [];

  iDecision: IDecision;
  inDecision: IDecision[] = [];

  iHemodialisis: IHemodialisis;
  inHemodialisis: IHemodialisis[] = [];

  iTransHemodialisis: ITransHemodialisis;
  inTransHemodialisis: ITransHemodialisis[] = [];

  ds = new MatTableDataSource<ITransHemodialisis>();
  dc: string[] = ['editar', 'hora', 'ta', 'fc', 'fr', 'sat', 'temp', 'qc', 'qo', 'part', 'pven', 'ptm', 'tasaUf', 'uf', 'ktv', 'agregar'];

  constructor(private cdr: ChangeDetectorRef, public shared: Shared, public dialog: MatDialogRef<DialogConsultComponent>, @Inject(MAT_DIALOG_DATA) public data: any, protected service: ServiceProService, public message: Message, private sanitizer: DomSanitizer, public snackbar: Snackbar, public _dialog: MatDialog) {
    this.iAgenda = data['iAgenda'];
    this.iLlegada = data['iLlegada'];
  }

  ngOnInit(): void {
    this.ngHandle('getSexo');
    this.ngHandle('getDecision');
    this.ngHandle('getPaciente');
    this.ngHandle('getPacienteImagen');
    this.ngHandle('getHemodialisis');
    this.ngHandle('getTransHemodialisis');
    this.ngHandle('TransHemodialisis');
  }

  ngAfterViewInit(): void {
  }

  ngClean(option: string, data?: any): void {

    switch (option) {
      case 'iAgenda': {
        this.iAgenda = { id: 0, idPaciente: 0, idEquipo: 0, comentario: '', fechaAgenda: '', fechaInicio: '', fechaFin: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inAgenda': {
        this.inAgenda = [];
        break;
      }
      case 'iLlegada': {
        this.iLlegada = { id: 0, idAgenda: 0, idPaciente: 0, fechaLlegada: '', horaLlegada: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inLlegada': {
        this.inLlegada = [];
        break;
      }
      case 'iPago': {
        this.iPago = { id: 0, idAgenda: 0, idPaciente: 0, idFormaPago: 0, importe: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inPago': {
        this.inPago = [];
        break;
      }
      case 'iPaciente': {
        this.iPaciente = { id: 0, paciente: '', nombre: '', apellidoPaterno: '', apellidoMaterno: '', nombreCompleto: '', fechaNacimiento: '', edad: 0, idSexo: 0, idEstado: 0, idMunicipio: 0, idColonia: 0, codigoPostal: '', calle: '', numeroInterior: '', numeroExterior: '', telefonoMovil: '', telefonoCasa: '', correo: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inPaciente': {
        this.inPaciente = [];
        break;
      }
      case 'iPacienteImagen': {
        this.iPacienteImagen = { id: 0, idPaciente: 0, ruta: '', nombre: '', extension: '', archivo: '', imagen: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inPacienteImagen': {
        this.inPacienteImagen = [];
        break;
      }
      case 'iSexo': {
        this.iSexo = { id: 0, sexo: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inSexo': {
        this.inSexo = [];
        break;
      }
      case 'iDecision': {
        this.iDecision = { id: 0, decision: '', idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inDecision': {
        this.inDecision = [];
        break;
      }
      case 'iHemodialisis': {
        this.iHemodialisis = { id: 0, idAgenda: this.iAgenda.id, idPaciente: this.iAgenda.idPaciente, diagnostico: '', fechaIngreso: '', talla: '', peso: '', tipoDe: '', fechaAn: '', residual: '', alergias: '', fechaPanelViral: '', agsVHB: '', acVHC: '', acVIH: '', idDecisionSalida: 0, idDecisionBaston: 0, idDecisionAuditiva: 0, idDecisionLinguistica: 0, idDecisionAndadera: 0, idDecisionCamilla: 0, idDecisionVisual: 0, idDecisionCreencias: 0, filtro: '', tiempo: '', qs: '', qo: '', temp: '', na: '', c: '', qa: '', hcc: '', anticoagulacion: '', rodo: '', infusion: '', ktv: '', uf: '', resumenFiltro: '', frecuenciaHemodialisis: '', indicacionesMedicas: '', indicacionesVerbales: '', indicacionesTelefonicas: '', indicacionesElectronicas: '', idDecisionIndicacion: 0, idDecisionPaciente: 0, idDecisionProcedimiento: 0, idDecisionVerificacion: 0, idDecisionPreescripcion: 0, idDecisionAngioacceso: 0, idDecisionTimeOut: 0, idDecisionEquipo: 0, idDecisionRiesgo: 0, idDecisionIdentifico: 0, preTAPie: '', preFCPie: '', preTempC: '', preTASentado: '', preFCSentado: '', preSaturacion: '', preFRespiratoria: '', prePesoEgreso: '', prePesoActual: '', posTAPie: '', posFCPie: '', posTempC: '', posTASentado: '', posFCSentado: '', posSaturacion: '', posFRespiratoria: '', posGananciaPeso: '', posPesoFinal: '', idDecisionPreExterno: 0, idDecisionPreInterno: 0, idDecisionPreCateter: 0, idDecisionPrePermeabilidad: 0, idDecisionPreInfeccion: 0, idDecisionTraExterno: 0, idDecisionTraInterno: 0, idDecisionTraCateter: 0, idDecisionTraPermeabilidad: 0, idDecisionTraInfeccion: 0, idDecisionPosExterno: 0, idDecisionPosInterno: 0, idDecisionPosCateter: 0, idDecisionPosPermeabilidad: 0, idDecisionPosInfeccion: 0, observacionCateter: '', idDecisionPreTrill: 0, idDecisionPreEdena: 0, idDecisionPreEquimosis: 0, idDecisionPreHematoma: 0, idDecisionPreAnerisma: 0, idDecisionPreAdecuada: 0, idDecisionPreDato: 0, idDecisionTraTrill: 0, idDecisionTraEdena: 0, idDecisionTraEquimosis: 0, idDecisionTraHematoma: 0, idDecisionTraAnerisma: 0, idDecisionTraAdecuada: 0, idDecisionTraDato: 0, idDecisionPosTrill: 0, idDecisionPosEdena: 0, idDecisionPosEquimosis: 0, idDecisionPosHematoma: 0, idDecisionPosAnerisma: 0, idDecisionPosAdecuada: 0, idDecisionPosDato: 0, observacionFistula: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inHemodialisis': {
        this.inHemodialisis = [];
        break;
      }
      case 'iTransHemodialisis': {
        this.iTransHemodialisis = { id: 0, idAgenda: this.iAgenda.id, idPaciente: this.iAgenda.idPaciente, hora: '', ta: '', fc: '', fr: '', sat: '', temp: '', qc: '', qo: '', part: '', pven: '', ptm: '', tasaUf: '', uf: '', ktv: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inTransHemodialisis': {
        this.inTransHemodialisis = [];
        break;
      }
    }

  }

  ngModelSet(option: string, data?: any): void {

    switch (option) {
      case 'getSexo': {
        this.ngClean('iSexo');
        break;
      }
      case 'getDecision': {
        this.ngClean('iDecision');
        break;
      }
      case 'getPaciente': {
        this.ngClean('iPaciente');
        this.iPaciente.id = this.iAgenda.idPaciente;
        break;
      }
      case 'getPacienteImagen': {
        this.ngClean('iPacienteImagen');
        this.iPacienteImagen.idPaciente = this.iPaciente.id;
        break;
      }
      case 'getHemodialisis': {
        this.ngClean('iHemodialisis');
        break;
      }
      case 'postHemodialisis': {
        this.iHemodialisis.fechaIngreso = (this.iHemodialisis.fechaIngreso || this.shared.ngFechaDefault());
        this.iHemodialisis.fechaAn = (this.iHemodialisis.fechaAn || this.shared.ngFechaDefault());
        this.iHemodialisis.fechaPanelViral = (this.iHemodialisis.fechaPanelViral || this.shared.ngFechaDefault());
        break;
      }
      case 'putHemodialisis': {
        this.iHemodialisis.fechaIngreso = (this.iHemodialisis.fechaIngreso || this.shared.ngFechaDefault());
        this.iHemodialisis.fechaAn = (this.iHemodialisis.fechaAn || this.shared.ngFechaDefault());
        this.iHemodialisis.fechaPanelViral = (this.iHemodialisis.fechaPanelViral || this.shared.ngFechaDefault());
        break;
      }
      case 'getTransHemodialisis': {
        this.ngClean('iTransHemodialisis');
        break;
      }
      case 'postTransHemodialisis': {
        this.inTransHemodialisis.forEach(item => { item.id = 0; item.activo = true; });
        break;
      }
      case 'deleteTransHemodialisis': {
        this.inTransHemodialisis.forEach(item => item.activo = false);
        break;
      }
      case 'TransHemodialisis': {
        this.ngClean('inTransHemodialisis');
        this.ngAddTransHemodialisis();
        break;
      }
    }
  }

  ngModelGet(option: string, data?: any): void {

    switch (option) {
      case 'getSexo': {
        this.ngClean('inSexo');
        const model: ISexo[] = data as ISexo[];
        this.inSexo = model;
        break;
      }
      case 'getDecision': {
        this.ngClean('inDecision');
        const model: IDecision[] = data as IDecision[];
        this.inDecision = model;
        break;
      }
      case 'getPaciente': {
        this.ngClean('inPaciente');
        this.ngClean('iPaciente');
        const model: IPaciente[] = data as IPaciente[];
        this.inPaciente = model;

        if (this.inPaciente.length >= 1) {
          this.iPaciente = this.inPaciente[0];
        }
        break;
      }
      case 'getPacienteImagen': {
        this.ngClean('inPacienteImagen');
        this.ngClean('iPacienteImagen');
        const model: IPacienteImagen[] = data as IPacienteImagen[];
        this.inPacienteImagen = model;

        if (this.inPacienteImagen.length >= 1) {
          this.iPacienteImagen = this.inPacienteImagen[0];
        }
        break;
      }
      case 'getHemodialisis': {
        this.ngClean('inHemodialisis');
        this.ngClean('iHemodialisis');
        const model: IHemodialisis[] = data as IHemodialisis[];
        this.inHemodialisis = model;

        if (this.inHemodialisis.length >= 1) {
          this.iHemodialisis = this.inHemodialisis[0];
        }

        this.iHemodialisis.fechaIngreso = (this.iHemodialisis.fechaIngreso == this.shared.ngFechaDefault() ? '' : this.iHemodialisis.fechaIngreso);
        this.iHemodialisis.fechaAn = (this.iHemodialisis.fechaAn == this.shared.ngFechaDefault() ? '' : this.iHemodialisis.fechaAn);
        this.iHemodialisis.fechaPanelViral = (this.iHemodialisis.fechaPanelViral == this.shared.ngFechaDefault() ? '' : this.iHemodialisis.fechaPanelViral);

        break;
      }
      case 'postHemodialisis': {
        this.iHemodialisis.id = data;
        this.iHemodialisis.fechaIngreso = (this.iHemodialisis.fechaIngreso == this.shared.ngFechaDefault() ? '' : this.iHemodialisis.fechaIngreso);
        this.iHemodialisis.fechaAn = (this.iHemodialisis.fechaAn == this.shared.ngFechaDefault() ? '' : this.iHemodialisis.fechaAn);
        this.iHemodialisis.fechaPanelViral = (this.iHemodialisis.fechaPanelViral == this.shared.ngFechaDefault() ? '' : this.iHemodialisis.fechaPanelViral);
        break;
      }
      case 'putHemodialisis': {
        this.iHemodialisis.fechaIngreso = (this.iHemodialisis.fechaIngreso == this.shared.ngFechaDefault() ? '' : this.iHemodialisis.fechaIngreso);
        this.iHemodialisis.fechaAn = (this.iHemodialisis.fechaAn == this.shared.ngFechaDefault() ? '' : this.iHemodialisis.fechaAn);
        this.iHemodialisis.fechaPanelViral = (this.iHemodialisis.fechaPanelViral == this.shared.ngFechaDefault() ? '' : this.iHemodialisis.fechaPanelViral);
        break;
      }
      case 'getTransHemodialisis': {
        this.ngClean('inTransHemodialisis');
        const model: ITransHemodialisis[] = data as ITransHemodialisis[];
        this.inTransHemodialisis = model;

        if (this.inTransHemodialisis.length == 0) {
          this.ngAddTransHemodialisis();
        }
        else {
          this.ngHandleSource();
        }

        break;
      }
      case 'postTransHemodialisis': {

        break;
      }
      case 'deleteTransHemodialisis': {

        break;
      }
      case 'TransHemodialisis': {

        break;
      }
    }
  }

  ngHandle(option: string, data?: any): void {

    switch (option) {
      case 'getSexo': {
        this.ngController('getSexo');
        break;
      }
      case 'getDecision': {
        this.ngController('getDecision');
        break;
      }
      case 'getPaciente': {
        this.ngController('getPaciente');
        break;
      }
      case 'getPacienteImagen': {
        this.ngController('getPacienteImagen');
        break;
      }
      case 'getHemodialisis': {
        this.ngController('getHemodialisis');
        break;
      }
      case 'hemodialisis': {

        if (this.iHemodialisis.id == 0) {
          this.ngController('postHemodialisis');
        } else {
          this.ngController('putHemodialisis');
        }

        break;
      }
      case 'getTransHemodialisis': {
        this.ngController('getTransHemodialisis');
        break;
      }
      case 'postTransHemodialisis': {
        this.ngController('postTransHemodialisis');
        break;
      }
      case 'deleteTransHemodialisis': {
        this.ngController('deleteTransHemodialisis');
        break;
      }
      case 'TransHemodialisis': {
        this.ngModelSet('TransHemodialisis');
        break;
      }
    }

  }

  ngValidate(option: string, data?: any): boolean {
    let b: boolean = true;

    switch (option) {
      case '': {
        break;
      }
    }

    return b;
  }

  ngController(option: string, data?: any): void {

    switch (option) {
      case 'getSexo': {
        this.ngModelSet('getSexo');
        this.ngGetSexo(2, this.iSexo);
        break;
      }
      case 'getDecision': {
        this.ngModelSet('getDecision');
        this.ngGetDecision(2, this.iDecision);
        break;
      }
      case 'getPaciente': {
        this.ngModelSet('getPaciente');
        this.ngGetPaciente(1, this.iPaciente);
        break;
      }
      case 'getPacienteImagen': {
        this.ngModelSet('getPacienteImagen');
        this.ngGetPacienteImagen(3, this.iPacienteImagen);
        break;
      }
      case 'getHemodialisis': {
        this.ngModelSet('getHemodialisis');
        this.ngGetHemodialisis(2, this.iHemodialisis);
        break;
      }
      case 'postHemodialisis': {
        this.ngModelSet('postHemodialisis');
        this.ngPostHemodialisis(this.iHemodialisis);
        break;
      }
      case 'putHemodialisis': {
        this.ngModelSet('putHemodialisis');
        this.ngPutHemodialisis(1, this.iHemodialisis);
        break;
      }
      case 'getTransHemodialisis': {
        this.ngModelSet('getTransHemodialisis');
        this.ngGetTransHemodialisis(1, this.iTransHemodialisis);
        break;
      }
      case 'postTransHemodialisis': {
        this.ngModelSet('postTransHemodialisis');
        this.ngPostTransHemodialisis(this.inTransHemodialisis);
        break;
      }
      case 'deleteTransHemodialisis': {
        this.ngModelSet('deleteTransHemodialisis');
        this.ngDeleteTransHemodialisis(1, this.inTransHemodialisis);
        break;
      }
    }

  }

  ngDialogPago(): void {

    this.ngClean('iPago');
    this.iPago.idAgenda = this.iAgenda.id;
    this.iPago.idPaciente = this.iAgenda.idPaciente;

    this._dialog.open(DialogPaymentComponent, {
      panelClass: ['w100', 'h100'],
      autoFocus: false,
      data: { iPaciente: this.iPaciente, iPago: this.iPago }
    }).beforeClosed().subscribe(
      (r: boolean) => {

        if (r) {

        }

      });

  }

  async ngGetSexo(option: number, model: ISexo) {

    await this.service.ngGetSexo(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getSexo', r.data);
        }
        else {
          this.message.dialogMessage(this.shared.ngFalse());
        }

      }).catch(
        (e: any) => {
          console.error(e);
          this.message.dialogMessage(this.shared.ngError(e));
        }
      ).finally(() => { });

  }

  async ngGetDecision(option: number, model: IDecision) {

    await this.service.ngGetDecision(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getDecision', r.data);
        }
        else {
          this.message.dialogMessage(this.shared.ngFalse());
        }

      }).catch(
        (e: any) => {
          console.error(e);
          this.message.dialogMessage(this.shared.ngError(e));
        }
      ).finally(() => { });

  }

  async ngGetPaciente(option: number, model: IPaciente) {

    await this.service.ngGetPaciente(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getPaciente', r.data);
        } else {
          this.message.dialogMessage(this.shared.ngFalse());
        }

      }).catch(
        (e: any) => {
          console.error(e);
          this.message.dialogMessage(this.shared.ngError(e));
        }
      ).finally(() => { });

  }

  async ngGetPacienteImagen(option: number, model: IPacienteImagen) {

    await this.service.ngGetPacienteImagen(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getPacienteImagen', r.data);
        } else {
          this.message.dialogMessage(this.shared.ngFalse());
        }

      }).catch(
        (e: any) => {
          console.error(e);
          this.message.dialogMessage(this.shared.ngError(e));
        }
      ).finally(() => { });

  }

  async ngGetHemodialisis(option: number, model: IHemodialisis) {

    await this.service.ngGetHemodialisis(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getHemodialisis', r.data);
        } else {
          this.message.dialogMessage(this.shared.ngFalse());
        }

      }).catch(
        (e: any) => {
          console.error(e);
          this.message.dialogMessage(this.shared.ngError(e));
        }
      ).finally(() => { });

  }

  async ngGetTransHemodialisis(option: number, model: ITransHemodialisis) {

    await this.service.ngGetTransHemodialisis(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getTransHemodialisis', r.data);
        } else {
          this.message.dialogMessage(this.shared.ngFalse());
        }

      }).catch(
        (e: any) => {
          console.error(e);
          this.message.dialogMessage(this.shared.ngError(e));
        }
      ).finally(() => { });

  }

  async ngPostHemodialisis(model: IHemodialisis) {

    await this.service.ngPostHemodialisis(model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('postHemodialisis', r.data);
          this.ngHandle('deleteTransHemodialisis');
        } else {
          this.message.dialogMessage(this.shared.ngFalse());
        }

      }).catch(
        (e: any) => {
          console.error(e);
          this.message.dialogMessage(this.shared.ngError(e));
        }
      ).finally(() => { });

  }

  async ngPostTransHemodialisis(model: ITransHemodialisis[]) {

    await this.service.ngPostTransHemodialisis(model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('postTransHemodialisis', r.data);
          this.snackbar.success('Informacion guardada correctamente.');
        } else {
          this.message.dialogMessage(this.shared.ngFalse());
        }

      }).catch(
        (e: any) => {
          console.error(e);
          this.message.dialogMessage(this.shared.ngError(e));
        }
      ).finally(() => { });

  }

  async ngPutHemodialisis(option: number, model: IHemodialisis) {

    await this.service.ngPutHemodialisis(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('putHemodialisis', r.data);
          this.ngHandle('deleteTransHemodialisis');
        } else {
          this.message.dialogMessage(this.shared.ngFalse());
        }

      }).catch(
        (e: any) => {
          console.error(e);
          this.message.dialogMessage(this.shared.ngError(e));
        }
      ).finally(() => { });

  }

  async ngDeleteTransHemodialisis(option: number, model: ITransHemodialisis[]) {

    await this.service.ngDeleteTransHemodialisis(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('deleteTransHemodialisis', r.data);
          this.ngHandle('postTransHemodialisis');
        } else {
          this.message.dialogMessage(this.shared.ngFalse());
        }

      }).catch(
        (e: any) => {
          console.error(e);
          this.message.dialogMessage(this.shared.ngError(e));
        }
      ).finally(() => { });

  }

  async ngDownloadReporteHemodialisis() {

    await this.service.ngDownloadReporteHemodialisis(this.iAgenda)
      .then((r) => {

        var blob = new Blob([r], { type: 'application/vnd.ms-excel' });
        saveAs(blob, 'HEMODIALISIS_ANVERSO' + '_' + this.shared.ngExportDate() + this.shared.extension);

      }).catch(
        (e: any) => {
          console.error(e);
          this.message.dialogMessage(e['message']);
        }
      ).finally(() => { });

  }

  ngImage() {
    if (this.iPacienteImagen == undefined) {
      return '../../assets/default.png';
    } else {
      return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/' + this.iPacienteImagen.extension.replace('.', '') + ';base64,' + this.iPacienteImagen.imagen);
    }
  }

  ngHandleSource(): void {
    this.ds = new MatTableDataSource<ITransHemodialisis>(this.inTransHemodialisis);
  }

  ngAddTransHemodialisis(): void {
    this.inTransHemodialisis.push({ id: 0, idAgenda: this.iAgenda.id, idPaciente: this.iAgenda.idPaciente, hora: '', ta: '', fc: '', fr: '', sat: '', temp: '', qc: '', qo: '', part: '', pven: '', ptm: '', tasaUf: '', uf: '', ktv: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true });
    this.ngHandleSource();
  }

  ngRemoveTransHemodialisis(index: number): void {
    this.inTransHemodialisis.splice(index, 1);
    this.ngHandleSource();
  }

}
