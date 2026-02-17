import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IOrganizacion, IResponse } from '../../interface/interface-pro.interface';
import { Message } from '../../message/message';
import { ServiceProService } from '../../service/service-pro.service';
import { Shared } from '../../shared/shared';

@Component({
  selector: 'app-dialog-organization',
  templateUrl: './dialog-organization.component.html',
  styleUrls: ['./dialog-organization.component.css']
})
export class DialogOrganizationComponent implements OnInit {
  expand: boolean = true;

  iOrganizacion: IOrganizacion;
  inOrganizacion: IOrganizacion[] = [];

  constructor(private cdr: ChangeDetectorRef, public shared: Shared, public dialog: MatDialogRef<DialogOrganizationComponent>, @Inject(MAT_DIALOG_DATA) public data: any, protected service: ServiceProService, public message: Message) {
    this.iOrganizacion = data['model'];
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  ngClean(option: string, data?: any): void {

    switch (option) {
      case 'iOrganizacion': {
        this.iOrganizacion = { id: 0, organizacion: '', nombre: '', apellidoPaterno: '', apellidoMaterno: '', nombreCompleto: '', telefono: '', correo: '', calle: '', numeroExterior: '', numeroInterior: '', colonia: '', municipio: '', estado: '', idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inOrganizacion': {
        this.inOrganizacion = [];
        break;
      }
      case 'iOrganizacion.organizacion': {
        this.iOrganizacion.organizacion = '';
        if (data != undefined) {
          let event: MouseEvent = data;
          event.stopPropagation();
        }
        break;
      }
      case 'iOrganizacion.nombre': {
        this.iOrganizacion.nombre = '';
        break;
      }
      case 'iOrganizacion.apellidoPaterno': {
        this.iOrganizacion.apellidoPaterno = '';
        break;
      }
      case 'iOrganizacion.apellidoMaterno': {
        this.iOrganizacion.apellidoMaterno = '';
        break;
      }
      case 'iOrganizacion.telefono': {
        this.iOrganizacion.telefono = '';
        break;
      }
      case 'iOrganizacion.correo': {
        this.iOrganizacion.correo = '';
        break;
      }
      case 'iOrganizacion.calle': {
        this.iOrganizacion.calle = '';
        break;
      }
      case 'iOrganizacion.numeroExterior': {
        this.iOrganizacion.numeroExterior = '';
        break;
      }
      case 'iOrganizacion.numeroInterior': {
        this.iOrganizacion.numeroInterior = '';
        break;
      }
      case 'iOrganizacion.colonia': {
        this.iOrganizacion.colonia = '';
        break;
      }
      case 'iOrganizacion.municipio': {
        this.iOrganizacion.municipio = '';
        break;
      }
      case 'iOrganizacion.estado': {
        this.iOrganizacion.estado = '';
        break;
      }
    }

  }

  ngModelSet(option: string, data?: any): void {

    switch (option) {
      case '': {
        break;
      }
    }
  }

  ngModelGet(option: string, data?: any): void {

    switch (option) {
      case 'iOrganizacion': {
        const model: IOrganizacion[] = data as IOrganizacion[];
        this.inOrganizacion = model;
        break;
      }

    }
  }

  ngController(option: string, data?: any): void {

    switch (option) {
      case 'getOrganizacion': {
        this.ngGetOrganizacion(3, this.iOrganizacion);
        break;
      }
      case 'postOrganizacion': {
        this.ngPostOrganizacion(this.iOrganizacion);
        break;
      }
      case 'putOrganizacion': {
        this.ngPutOrganizacion(1, this.iOrganizacion);
        break;
      }
    }

  }

  ngHandle(option: string, data?: any): void {

    switch (option) {
      case 'handle': {

        if (this.ngValidate('iOrganizacion')) {

          if (this.iOrganizacion.id == 0) {
            this.ngController('postOrganizacion');
          } else {
            this.ngController('putOrganizacion');
          }

        }

        break;
      }
    }

  }

  ngValidate(option: string, data?: any): boolean {
    let b: boolean = true;

    switch (option) {
      case 'iOrganizacion.organizacion': {

        if (this.inOrganizacion.length) {
          this.message.dialogMessage('No es posible agregar la Organizacion <b>' + this.iOrganizacion.organizacion + '</b> debido a que ya se encuentra agregada, intenta con uno diferente.');
          this.ngClean('iOrganizacion.organizacion');
          b = false;
        }

        break;
      }
      case 'iOrganizacion': {

        if (this.iOrganizacion.telefono.length < 10) {
          b = false;
          this.message.dialogMessage('Ingresa el numero de teléfono a 10 digitos.');
        }
        else if (!this.shared.ngEmail(this.iOrganizacion.correo)) {
          b = false;
          this.message.dialogMessage('Formato de correo electronico incorrecto, verifica que cuente con un formato valido.');
        }

        break;
      }
    }

    return b;
  }

  async ngGetOrganizacion(option: number, model: IOrganizacion) {

    await this.service.ngGetOrganizacion(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('iOrganizacion', r.data);
          this.ngValidate('iOrganizacion.organizacion');
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

  async ngPostOrganizacion(model: IOrganizacion) {

    await this.service.ngPostOrganizacion(model)
      .then((r: IResponse) => {

        if (r.success) {
          this.dialog.close(true);
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

  async ngPutOrganizacion(option: number, model: IOrganizacion) {

    await this.service.ngPutOrganizacion(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.dialog.close(true);
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

}
