import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { IAgenda, IDecision, IHemodialisis, IPaciente, IPacienteImagen, IResponse, ISexo, ITranshemodialisis } from '../../interface/interface-pro.interface';
import { Message } from '../../message/message';
import { ServiceProService } from '../../service/service-pro.service';
import { Shared } from '../../shared/shared';
import { Snackbar } from '../../snackbar/snackbar';

@Component({
  selector: 'app-dialog-consult',
  templateUrl: './dialog-consult.component.html',
  styleUrls: ['./dialog-consult.component.css']
})
export class DialogConsultComponent implements OnInit {

  iAgenda: IAgenda;
  inAgenda: IAgenda[] = [];

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

  iTranshemodialisis: ITranshemodialisis;
  inTranshemodialisis: ITranshemodialisis[] = [];

  ds = new MatTableDataSource<ITranshemodialisis>();
  dc: string[] = ['editar', 'hora', 'ta', 'fc', 'fr', 'sat', 'temp', 'qc', 'qo', 'part', 'pven', 'ptm', 'tasaUf', 'uf', 'ktv', 'agregar'];

  constructor(private cdr: ChangeDetectorRef, public shared: Shared, public dialog: MatDialogRef<DialogConsultComponent>, @Inject(MAT_DIALOG_DATA) public data: any, protected service: ServiceProService, public message: Message, private sanitizer: DomSanitizer, public snackbar: Snackbar) {
    this.iAgenda = data['model'];
  }

  ngOnInit(): void {
    this.ngHandle('getSexo');
    this.ngHandle('getDecision');
    this.ngHandle('getPaciente');
    this.ngHandle('getPacienteImagen');
    this.ngHandle('getHemodialisis');
    this.ngHandle('getTranshemodialisis');
    this.ngHandle('transhemodialisis');
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
        this.iHemodialisis = { id: 0, idAgenda: this.iAgenda.id, diagnostico: '', fechaIngreso: '', talla: '', peso: '', tipoDe: '', fechaAn: '', residual: '', alergias: '', fechaPanelViral: '', agsVHB: '', acVHC: '', acVIH: '', idDecisionSalida: 0, idDecisionBaston: 0, idDecisionAuditiva: 0, idDecisionLinguistica: 0, idDecisionAndadera: 0, idDecisionCamilla: 0, idDecisionVisual: 0, idDecisionCreencias: 0, filtro: '', tiempo: '', qs: '', qo: '', temp: '', na: '', c: '', qa: '', hcc: '', anticoagulacion: '', rodo: '', infusion: '', ktv: '', uf: '', resumenFiltro: '', frecuenciaHemodialisis: '', indicacionesMedicas: '', indicacionesVerbales: '', indicacionesTelefonicas: '', indicacionesElectronicas: '', idDecisionIndicacion: 0, idDecisionPaciente: 0, idDecisionProcedimiento: 0, idDecisionVerificacion: 0, idDecisionPreescripcion: 0, idDecisionAngioacceso: 0, idDecisionTimeOut: 0, idDecisionEquipo: 0, idDecisionRiesgo: 0, idDecisionIdentifico: 0, preTAPie: '', preFCPie: '', preTempC: '', preTASentado: '', preFCSentado: '', preSaturacion: '', preFRespiratoria: '', prePesoEgreso: '', prePesoActual: '', posTAPie: '', posFCPie: '', posTempC: '', posTASentado: '', posFCSentado: '', posSaturacion: '', posFRespiratoria: '', posGananciaPeso: '', posPesoFinal: '', idDecisionPreExterno: 0, idDecisionPreInterno: 0, idDecisionPreCateter: 0, idDecisionPrePermeabilidad: 0, idDecisionPreInfeccion: 0, idDecisionTraExterno: 0, idDecisionTraInterno: 0, idDecisionTraCateter: 0, idDecisionTraPermeabilidad: 0, idDecisionTraInfeccion: 0, idDecisionPosExterno: 0, idDecisionPosInterno: 0, idDecisionPosCateter: 0, idDecisionPosPermeabilidad: 0, idDecisionPosInfeccion: 0, observacionCateter: '', idDecisionPreTrill: 0, idDecisionPreEdena: 0, idDecisionPreEquimosis: 0, idDecisionPreHematoma: 0, idDecisionPreAnerisma: 0, idDecisionPreAdecuada: 0, idDecisionPreDato: 0, idDecisionTraTrill: 0, idDecisionTraEdena: 0, idDecisionTraEquimosis: 0, idDecisionTraHematoma: 0, idDecisionTraAnerisma: 0, idDecisionTraAdecuada: 0, idDecisionTraDato: 0, idDecisionPosTrill: 0, idDecisionPosEdena: 0, idDecisionPosEquimosis: 0, idDecisionPosHematoma: 0, idDecisionPosAnerisma: 0, idDecisionPosAdecuada: 0, idDecisionPosDato: 0, observacionFistula: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inHemodialisis': {
        this.inHemodialisis = [];
        break;
      }
      case 'iTranshemodialisis': {
        this.iTranshemodialisis = { id: 0, idAgenda: this.iAgenda.id, hora: '', ta: '', fc: '', fr: '', sat: '', temp: '', qc: '', qo: '', part: '', pven: '', ptm: '', tasaUf: '', uf: '', ktv: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inTranshemodialisis': {
        this.inTranshemodialisis = [];
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
      case 'getTranshemodialisis': {
        this.ngClean('iTranshemodialisis');
        break;
      }
      case 'postTranshemodialisis': {
        this.inTranshemodialisis.forEach(item => { item.id = 0; item.activo = true; });
        break;
      }
      case 'deleteTranshemodialisis': {
        this.inTranshemodialisis.forEach(item => item.activo = false);
        break;
      }
      case 'transhemodialisis': {
        this.ngClean('inTranshemodialisis');
        this.ngAddTranshemodialisis();
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
      case 'getTranshemodialisis': {
        this.ngClean('inTranshemodialisis');
        const model: ITranshemodialisis[] = data as ITranshemodialisis[];
        this.inTranshemodialisis = model;

        if (this.inTranshemodialisis.length == 0) {
          this.ngAddTranshemodialisis();
        }
        else {
          this.ngHandleSource();
        }

        break;
      }
      case 'postTranshemodialisis': {

        break;
      }
      case 'deleteTranshemodialisis': {

        break;
      }
      case 'transhemodialisis': {

        break;
      }
    }
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
      case 'getTranshemodialisis': {
        this.ngModelSet('getTranshemodialisis');
        this.ngGetTranshemodialisis(1, this.iTranshemodialisis);
        break;
      }
      case 'postTranshemodialisis': {
        this.ngModelSet('postTranshemodialisis');
        this.ngPostTranshemodialisis(this.inTranshemodialisis);
        break;
      }
      case 'deleteTranshemodialisis': {
        this.ngModelSet('deleteTranshemodialisis');
        this.ngDeleteTranshemodialisis(1, this.inTranshemodialisis);
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
      case 'getTranshemodialisis': {
        this.ngController('getTranshemodialisis');
        break;
      }
      case 'postTranshemodialisis': {
        this.ngController('postTranshemodialisis');
        break;
      }
      case 'deleteTranshemodialisis': {
        this.ngController('deleteTranshemodialisis');
        break;
      }
      case 'transhemodialisis': {
        this.ngModelSet('transhemodialisis');
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

  async ngGetTranshemodialisis(option: number, model: ITranshemodialisis) {

    await this.service.ngGetTranshemodialisis(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getTranshemodialisis', r.data);
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
          this.ngHandle('deleteTranshemodialisis');
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

  async ngPostTranshemodialisis(model: ITranshemodialisis[]) {

    await this.service.ngPostTranshemodialisis(model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('postTranshemodialisis', r.data);
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
          this.ngHandle('deleteTranshemodialisis');
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

  async ngDeleteTranshemodialisis(option: number, model: ITranshemodialisis[]) {

    await this.service.ngDeleteTranshemodialisis(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('deleteTranshemodialisis', r.data);
          this.ngHandle('postTranshemodialisis');
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

  ngImage() {
    if (this.iPacienteImagen == undefined) {
      return '../../assets/default.png';
    } else {
      return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/' + this.iPacienteImagen.extension.replace('.', '') + ';base64,' + this.iPacienteImagen.imagen);
    }
  }

  ngHandleSource(): void {
    this.ds = new MatTableDataSource<ITranshemodialisis>(this.inTranshemodialisis);
  }

  ngAddTranshemodialisis(): void {
    this.inTranshemodialisis.push({ id: 0, idAgenda: this.iAgenda.id, hora: '', ta: '', fc: '', fr: '', sat: '', temp: '', qc: '', qo: '', part: '', pven: '', ptm: '', tasaUf: '', uf: '', ktv: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true });
    this.ngHandleSource();
  }

  ngRemoveTranshemodialisis(index: number): void {
    this.inTranshemodialisis.splice(index, 1);
    this.ngHandleSource();
  }

}
