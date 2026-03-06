import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IResponse, IPago, IFormaPago, IPagoImagen, IPaciente, IConsentimientoImagen, IAvisoImagen } from '../../interface/interface-pro.interface';
import { Message } from '../../message/message';
import { ServiceProService } from '../../service/service-pro.service';
import { Shared } from '../../shared/shared';
import { Snackbar } from '../../snackbar/snackbar';
import { saveAs } from "file-saver";

@Component({
  selector: 'app-dialog-payment',
  templateUrl: './dialog-payment.component.html',
  styleUrls: ['./dialog-payment.component.css']
})
export class DialogPaymentComponent implements OnInit {

  iPaciente: IPaciente;
  inPaciente: IPaciente[] = [];

  iPago: IPago;
  inPago: IPago[] = [];

  iPagoImagen: IPagoImagen;
  inPagoImagen: IPagoImagen[] = [];

  iConsentimientoImagen: IConsentimientoImagen;
  inConsentimientoImagen: IConsentimientoImagen[] = [];

  iAvisoImagen: IAvisoImagen;
  inAvisoImagen: IAvisoImagen[] = [];

  iFormaPago: IFormaPago;
  inFormaPago: IFormaPago[] = [];
  filteredFormaPago: IFormaPago[] = [];

  filePago: File;
  fileConsentimiento: File;
  fileAviso: File;

  constructor(private cdr: ChangeDetectorRef, public shared: Shared, public dialog: MatDialogRef<DialogPaymentComponent>, @Inject(MAT_DIALOG_DATA) public data: any, protected service: ServiceProService, public message: Message, public snackbar: Snackbar) {
    this.iPaciente = data['iPaciente'];
    this.iPago = data['iPago'];
  }

  ngOnInit(): void {
    this.ngHandle('getFormaPago');
    this.ngHandle('getPago');
    this.ngHandle('getPagoImagen');
    this.ngHandle('getConsentimientoImagen');
    this.ngHandle('getAvisoImagen');
  }

  ngAfterViewInit(): void {
  }

  ngClean(option: string, data?: any): void {

    switch (option) {
      case 'iPaciente': {
        this.iPaciente = { id: 0, paciente: '', nombre: '', apellidoPaterno: '', apellidoMaterno: '', nombreCompleto: '', fechaNacimiento: '', edad: 0, idSexo: 0, idEstado: 0, idMunicipio: 0, idColonia: 0, codigoPostal: '', calle: '', numeroInterior: '', numeroExterior: '', telefonoMovil: '', telefonoCasa: '', correo: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inPaciente': {
        this.inPaciente = [];
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
      case 'iPagoImagen': {
        this.iPagoImagen = { id: 0, idPago: 0, idAgenda: 0, idPaciente: 0, ruta: '', nombre: '', extension: '', archivo: '', imagen: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inPagoImagen': {
        this.inPagoImagen = [];
        break;
      }
      case 'iConsentimientoImagen': {
        this.iConsentimientoImagen = { id: 0, idPago: 0, idAgenda: 0, idPaciente: 0, ruta: '', nombre: '', extension: '', archivo: '', imagen: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inConsentimientoImagen': {
        this.inConsentimientoImagen = [];
        break;
      }
      case 'iAvisoImagen': {
        this.iAvisoImagen = { id: 0, idPago: 0, idAgenda: 0, idPaciente: 0, ruta: '', nombre: '', extension: '', archivo: '', imagen: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inAvisoImagen': {
        this.inAvisoImagen = [];
        break;
      }
      case 'iFormaPago': {
        this.iFormaPago = { id: 0, formaPago: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inFormaPago': {
        this.inFormaPago = [];
        break;
      }
      case 'iPago.idFormaPago': {
        this.iPago.idFormaPago = 0;
        break;
      }
      case 'iPago.importe': {
        this.iPago.importe = '';
        break;
      }
      case 'iPagoImagen.nombre': {
        this.iPagoImagen.nombre = '';
        break;
      }
      case 'iConsentimientoImagen.nombre': {
        this.iConsentimientoImagen.nombre = '';
        break;
      }
    }

  }

  ngModelSet(option: string, data?: any): void {

    switch (option) {
      case 'getFormaPago': {
        this.ngClean('iFormaPago');
        break;
      }
      case 'getPago': {

        break;
      }
      case 'postPago': {

        break;
      }
      case 'putPago': {

        break;
      }
      case 'getPagoImagen': {
        this.ngClean('iPagoImagen');
        this.iPagoImagen.idAgenda = this.iPago.idAgenda;
        break;
      }
      case 'postPagoImagen': {
        this.iPagoImagen.idPago = this.iPago.id;
        this.iPagoImagen.idAgenda = this.iPago.idAgenda;
        this.iPagoImagen.idPaciente = this.iPago.idPaciente;
        break;
      }
      case 'deletePagoImagen': {
        this.ngClean('inPagoImagen');
        this.inPagoImagen.push({ id: 0, idPago: this.iPago.id, idAgenda: this.iPago.idAgenda, idPaciente: this.iPago.idPaciente, ruta: '', nombre: '', extension: '', archivo: '', imagen: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: false });
        break;
      }
      case 'getConsentimientoImagen': {
        this.ngClean('iConsentimientoImagen');
        this.iConsentimientoImagen.idAgenda = this.iPago.idAgenda;
        break;
      }
      case 'postConsentimientoImagen': {
        this.iConsentimientoImagen.idPago = this.iPago.id;
        this.iConsentimientoImagen.idAgenda = this.iPago.idAgenda;
        this.iConsentimientoImagen.idPaciente = this.iPago.idPaciente;
        break;
      }
      case 'deleteConsentimientoImagen': {
        this.ngClean('inConsentimientoImagen');
        this.inConsentimientoImagen.push({ id: 0, idPago: this.iPago.id, idAgenda: this.iPago.idAgenda, idPaciente: this.iPago.idPaciente, ruta: '', nombre: '', extension: '', archivo: '', imagen: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: false });
        break;
      }
      case 'getAvisoImagen': {
        this.ngClean('iAvisoImagen');
        this.iAvisoImagen.idAgenda = this.iPago.idAgenda;
        break;
      }
      case 'postAvisoImagen': {
        this.iAvisoImagen.idPago = this.iPago.id;
        this.iAvisoImagen.idAgenda = this.iPago.idAgenda;
        this.iAvisoImagen.idPaciente = this.iPago.idPaciente;
        break;
      }
      case 'deleteAvisoImagen': {
        this.ngClean('inAvisoImagen');
        this.inAvisoImagen.push({ id: 0, idPago: this.iPago.id, idAgenda: this.iPago.idAgenda, idPaciente: this.iPago.idPaciente, ruta: '', nombre: '', extension: '', archivo: '', imagen: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: false });
        break;
      }
    }
  }

  ngModelGet(option: string, data?: any): void {

    switch (option) {
      case 'getFormaPago': {
        this.ngClean('inFormaPago');
        const model: IFormaPago[] = data as IFormaPago[];
        this.inFormaPago = model;
        this.filteredFormaPago = model;
        break;
      }
      case 'getPago': {
        this.ngClean('inPago');
        const model: IPago[] = data as IPago[];
        this.inPago = model;

        if (this.inPago.length >= 1) {
          this.ngClean('iPago');
          this.iPago = this.inPago[0];
        }

        break;
      }
      case 'postPago': {

        break;
      }
      case 'putPago': {

        break;
      }
      case 'getPagoImagen': {
        this.ngClean('inPagoImagen');
        const model: IPagoImagen[] = data as IPagoImagen[];
        this.inPagoImagen = model;

        if (this.inPagoImagen.length >= 1) {
          this.ngClean('iPagoImagen');
          this.iPagoImagen = this.inPagoImagen[0];
        }

        break;
      }
      case 'postPagoImagen': {
        this.iPagoImagen.id = data;
        break;
      }
      case 'deletePagoImagen': {

        break;
      }
      case 'getConsentimientoImagen': {
        this.ngClean('inConsentimientoImagen');
        const model: IConsentimientoImagen[] = data as IConsentimientoImagen[];
        this.inConsentimientoImagen = model;

        if (this.inConsentimientoImagen.length >= 1) {
          this.ngClean('iConsentimientoImagen');
          this.iConsentimientoImagen = this.inConsentimientoImagen[0];
        }

        break;
      }
      case 'postConsentimientoImagen': {
        this.iConsentimientoImagen.id = data;
        break;
      }
      case 'deleteConsentimientoImagen': {

        break;
      }
      case 'getAvisoImagen': {
        this.ngClean('inAvisoImagen');
        const model: IAvisoImagen[] = data as IAvisoImagen[];
        this.inAvisoImagen = model;

        if (this.inAvisoImagen.length >= 1) {
          this.ngClean('iAvisoImagen');
          this.iAvisoImagen = this.inAvisoImagen[0];
        }

        break;
      }
      case 'postAvisoImagen': {
        this.iAvisoImagen.id = data;
        break;
      }
      case 'deleteAvisoImagen': {

        break;
      }
    }

  }

  ngHandle(option: string, data?: any): void {

    switch (option) {
      case 'getFormaPago': {
        this.ngController('getFormaPago');
        break;
      }
      case 'getPago': {
        this.ngController('getPago');
        break;
      }
      case 'pago': {

        if (this.iPago.id == 0) {
          this.ngController('postPago');
        } else {
          this.ngController('putPago');
        }

        break;
      }
      case 'getPagoImagen': {
        this.ngController('getPagoImagen');
        break;
      }
      case 'postPagoImagen': {
        this.ngController('postPagoImagen');
        break;
      }
      case 'deletePagoImagen': {
        this.ngController('deletePagoImagen');
        break;
      }
      case 'getConsentimientoImagen': {
        this.ngController('getConsentimientoImagen');
        break;
      }
      case 'postConsentimientoImagen': {
        this.ngController('postConsentimientoImagen');
        break;
      }
      case 'deleteConsentimientoImagen': {
        this.ngController('deleteConsentimientoImagen');
        break;
      }
      case 'getAvisoImagen': {
        this.ngController('getAvisoImagen');
        break;
      }
      case 'postAvisoImagen': {
        this.ngController('postAvisoImagen');
        break;
      }
      case 'deleteAvisoImagen': {
        this.ngController('deleteAvisoImagen');
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
      case 'getFormaPago': {
        this.ngModelSet('getFormaPago');
        this.ngGetFormaPago(2, this.iFormaPago);
        break;
      }
      case 'getPago': {
        this.ngModelSet('getPago');
        this.ngGetPago(2, this.iPago);
        break;
      }
      case 'postPago': {
        this.ngModelSet('postPago');
        this.ngPostPago(this.iPago);
        break;
      }
      case 'putPago': {
        this.ngModelSet('putPago');
        this.ngPutPago(1, this.iPago);
        break;
      }
      case 'getPagoImagen': {
        this.ngModelSet('getPagoImagen');
        this.ngGetPagoImagen(2, this.iPagoImagen);
        break;
      }
      case 'postPagoImagen': {
        this.ngModelSet('postPagoImagen');
        this.ngPostPagoImagen(this.iPaciente, this.iPagoImagen, this.filePago);
        break;
      }
      case 'deletePagoImagen': {
        this.ngModelSet('deletePagoImagen');
        this.ngDeletePagoImagen(1, this.inPagoImagen);
        break;
      }
      case 'getConsentimientoImagen': {
        this.ngModelSet('getConsentimientoImagen');
        this.ngGetConsentimientoImagen(2, this.iConsentimientoImagen);
        break;
      }
      case 'postConsentimientoImagen': {
        this.ngModelSet('postConsentimientoImagen');
        this.ngPostConsentimientoImagen(this.iPaciente, this.iConsentimientoImagen, this.fileConsentimiento);
        break;
      }
      case 'deleteConsentimientoImagen': {
        this.ngModelSet('deleteConsentimientoImagen');
        this.ngDeleteConsentimientoImagen(1, this.inConsentimientoImagen);
        break;
      }
      case 'getAvisoImagen': {
        this.ngModelSet('getAvisoImagen');
        this.ngGetAvisoImagen(2, this.iAvisoImagen);
        break;
      }
      case 'postAvisoImagen': {
        this.ngModelSet('postAvisoImagen');
        this.ngPostAvisoImagen(this.iPaciente, this.iAvisoImagen, this.fileAviso);
        break;
      }
      case 'deleteAvisoImagen': {
        this.ngModelSet('deleteAvisoImagen');
        this.ngDeleteAvisoImagen(1, this.inAvisoImagen);
        break;
      }
    }

  }

  async ngGetFormaPago(option: number, model: IFormaPago) {

    await this.service.ngGetFormaPago(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getFormaPago', r.data);
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

  async ngGetPago(option: number, model: IPago) {

    await this.service.ngGetPago(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getPago', r.data);
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

  async ngGetPagoImagen(option: number, model: IPagoImagen) {

    await this.service.ngGetPagoImagen(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getPagoImagen', r.data);
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

  async ngGetConsentimientoImagen(option: number, model: IConsentimientoImagen) {

    await this.service.ngGetConsentimientoImagen(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getConsentimientoImagen', r.data);
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

  async ngGetAvisoImagen(option: number, model: IAvisoImagen) {

    await this.service.ngGetAvisoImagen(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getAvisoImagen', r.data);
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

  async ngPostPago(model: IPago) {

    await this.service.ngPostPago(model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('postPago', r.data);
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

  async ngPostPagoImagen(iPaciente: IPaciente, iPagoImagen: IPagoImagen, file: File) {

    await this.service.ngPostPagoImagen(iPaciente, iPagoImagen, file)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('postPagoImagen', r.data);
          this.ngHandle('getPagoImagen');
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

  async ngPostConsentimientoImagen(iPaciente: IPaciente, iConsentimientoImagen: IConsentimientoImagen, file: File) {

    await this.service.ngPostConsentimientoImagen(iPaciente, iConsentimientoImagen, file)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('postConsentimientoImagen', r.data);
          this.ngHandle('getConsentimientoImagen');
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

  async ngPostAvisoImagen(iPaciente: IPaciente, iAvisoImagen: IAvisoImagen, file: File) {

    await this.service.ngPostAvisoImagen(iPaciente, iAvisoImagen, file)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('postAvisoImagen', r.data);
          this.ngHandle('getAvisoImagen');
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

  async ngPutPago(option: number, model: IPago) {

    await this.service.ngPutPago(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('putPago', r.data);
          this.snackbar.success('Informacion actualizada correctamente.');
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

  async ngDeletePagoImagen(option: number, model: IPagoImagen[]) {

    await this.service.ngDeletePagoImagen(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('deletePagoImagen', r.data);
          this.ngHandle('postPagoImagen');
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

  async ngDeleteConsentimientoImagen(option: number, model: IConsentimientoImagen[]) {

    await this.service.ngDeleteConsentimientoImagen(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('deleteConsentimientoImagen', r.data);
          this.ngHandle('postConsentimientoImagen');
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

  async ngDeleteAvisoImagen(option: number, model: IAvisoImagen[]) {

    await this.service.ngDeleteAvisoImagen(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('deleteAvisoImagen', r.data);
          this.ngHandle('postAvisoImagen');
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

  async ngDownloadPagoDocumento() {

    await this.service.ngDownloadPagoDocumento(this.iPago)
      .then((r) => {

        var blob = new Blob([r], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
        saveAs(blob, 'RECIBO_PAGO' + '_' + this.shared.ngExportDate() + '.docx');

      }).catch(
        (e: any) => {
          console.error(e);
          this.message.dialogMessage(e['message']);
        }
      ).finally(() => { });

  }

  async ngDownloadConsentimientoDocumento() {

    await this.service.ngDownloadConsentimientoDocumento(this.iPago)
      .then((r) => {

        var blob = new Blob([r], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
        saveAs(blob, 'CONSENTIMIENTO_INFORMADO' + '_' + this.shared.ngExportDate() + '.docx');

      }).catch(
        (e: any) => {
          console.error(e);
          this.message.dialogMessage(e['message']);
        }
      ).finally(() => { });

  }

  async ngDownloadAvisoDocumento() {

    await this.service.ngDownloadAvisoDocumento(this.iPago)
      .then((r) => {

        var blob = new Blob([r], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
        saveAs(blob, 'AVISO_HORARIO' + '_' + this.shared.ngExportDate() + '.docx');

      }).catch(
        (e: any) => {
          console.error(e);
          this.message.dialogMessage(e['message']);
        }
      ).finally(() => { });

  }

  async ngDownloadPagoImagen() {

    await this.service.ngDownloadPagoImagen(this.iPagoImagen)
      .then((r) => {

        var blob = new Blob([r], { type: 'image/' + this.iPagoImagen.extension.replace('.', '') });
        saveAs(blob, 'RECIBO_PAGO' + '_' + this.shared.ngExportDate() + this.iPagoImagen.extension);

      }).catch(
        (e: any) => {
          console.error(e);
          this.message.dialogMessage(e['message']);
        }
      ).finally(() => { });

  }

  async ngDownloadConsentimientoImagen() {

    await this.service.ngDownloadConsentimientoImagen(this.iConsentimientoImagen)
      .then((r) => {

        var blob = new Blob([r], { type: 'image/' + this.iPagoImagen.extension.replace('.', '') });
        saveAs(blob, 'CONSENTIMIENTO_INFORMADO' + '_' + this.shared.ngExportDate() + this.iPagoImagen.extension);

      }).catch(
        (e: any) => {
          console.error(e);
          this.message.dialogMessage(e['message']);
        }
      ).finally(() => { });

  }

  async ngDownloadAvisoImagen() {

    await this.service.ngDownloadAvisoImagen(this.iAvisoImagen)
      .then((r) => {

        var blob = new Blob([r], { type: 'image/' + this.iPagoImagen.extension.replace('.', '') });
        saveAs(blob, 'AVISO_HORARIO' + '_' + this.shared.ngExportDate() + this.iPagoImagen.extension);

      }).catch(
        (e: any) => {
          console.error(e);
          this.message.dialogMessage(e['message']);
        }
      ).finally(() => { });

  }

  ngHandleFilePago(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    this.iPagoImagen.nombre = file.name;

    const newName = file.name.replace(/\.[^/.]+$/, '') + this.shared.ngDateNumber() + file.name.match(/\.[^/.]+$/);
    const newFile = new File([file], newName, { type: file.type });

    this.filePago = newFile;
    this.ngHandle('deletePagoImagen');
  }

  ngHandleFileConsentimiento(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    this.iConsentimientoImagen.nombre = file.name;

    const newName = file.name.replace(/\.[^/.]+$/, '') + this.shared.ngDateNumber() + file.name.match(/\.[^/.]+$/);
    const newFile = new File([file], newName, { type: file.type });

    this.fileConsentimiento = newFile;
    this.ngHandle('deleteConsentimientoImagen');
  }

  ngHandleFileAviso(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    this.iAvisoImagen.nombre = file.name;

    const newName = file.name.replace(/\.[^/.]+$/, '') + this.shared.ngDateNumber() + file.name.match(/\.[^/.]+$/);
    const newFile = new File([file], newName, { type: file.type });

    this.fileAviso = newFile;
    this.ngHandle('deleteAvisoImagen');
  }

}
