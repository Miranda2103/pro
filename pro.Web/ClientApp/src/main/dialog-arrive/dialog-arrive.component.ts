import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IResponse, ILlegada, IAgenda } from '../../interface/interface-pro.interface';
import { Message } from '../../message/message';
import { ServiceProService } from '../../service/service-pro.service';
import { Shared } from '../../shared/shared';
import { DialogConsultComponent } from '../dialog-consult/dialog-consult.component';

@Component({
  selector: 'app-dialog-arrive',
  templateUrl: './dialog-arrive.component.html',
  styleUrls: ['./dialog-arrive.component.css']
})
export class DialogArriveComponent implements OnInit {

  iLlegada: ILlegada;
  inLlegada: ILlegada[] = [];

  iAgenda: IAgenda;
  inAgenda: IAgenda[] = [];

  constructor(private cdr: ChangeDetectorRef, public shared: Shared, public dialog: MatDialogRef<DialogArriveComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public _dialog: MatDialog, protected service: ServiceProService, public message: Message) {
    this.iLlegada = data['iLlegada'];
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  ngClean(option: string, data?: any): void {

    switch (option) {
      case 'iLlegada': {
        this.iLlegada = { id: 0, idAgenda: 0, idPaciente: 0, fechaLlegada: '', horaLlegada: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inLlegada': {
        this.inLlegada = [];
        break;
      }
      case 'iAgenda': {
        this.iAgenda = { id: 0, idPaciente: 0, idEquipo: 0, comentario: '', fechaAgenda: '', fechaInicio: '', fechaFin: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inAgenda': {
        this.inAgenda = [];
        break;
      }
      case 'iLlegada.fechaLlegada': {
        this.iLlegada.fechaLlegada = '';
        break;
      }
      case 'iLlegada.horaLlegada': {
        this.iLlegada.horaLlegada = '';
        break;
      }
    }

  }

  ngModelSet(option: string, data?: any): void {

    switch (option) {
      case 'postLlegada': {
        this.iLlegada.fechaLlegada = this.shared.ngDateISO(new Date(this.iLlegada.fechaLlegada));
        this.iLlegada.horaLlegada = this.iLlegada.horaLlegada + ':00';
        break;
      }
      case 'putLlegada': {
        this.iLlegada.fechaLlegada = this.shared.ngDateISO(new Date(this.iLlegada.fechaLlegada));
        this.iLlegada.horaLlegada = this.iLlegada.horaLlegada + ':00';
        break;
      }
    }
  }

  ngModelGet(option: string, data?: any): void {

    switch (option) {
      case 'postLlegada': {

        break;
      }
      case 'putLlegada': {

        break;
      }
    }

  }

  ngHandle(option: string, data?: any): void {

    switch (option) {
      case 'Llegada': {

        if (this.ngValidate('Llegada')) {

          if (this.iLlegada.id == 0) {
            this.ngController('postLlegada');
          } else {
            this.ngController('putLlegada');
          }

        }

        break;
      }
    }

  }

  ngValidate(option: string, data?: any): boolean {
    let b: boolean = true;

    switch (option) {
      case 'Llegada': {

        if (this.iLlegada.fechaLlegada == '') {
          this.message.dialogMessage('Ingresa una fecha de llegada.');
          b = false;
        }
        else if (this.iLlegada.horaLlegada == '') {
          this.message.dialogMessage('Ingresa una hora de llegada.');
          b = false;
        }

        break;
      }
    }

    return b;
  }

  ngController(option: string, data?: any): void {

    switch (option) {
      case 'postLlegada': {
        this.ngModelSet('postLlegada');
        this.ngPostLlegada(this.iLlegada);
        break;
      }
      case 'putLlegada': {
        this.ngModelSet('putLlegada');
        this.ngPutLlegada(1, this.iLlegada);
        break;
      }
    }

  }

  ngDialogConsulta(): void {

    this.ngClean('iAgenda');
    this.iAgenda.id = this.iLlegada.idAgenda;
    this.iAgenda.idPaciente = this.iLlegada.idPaciente;

    this._dialog.open(DialogConsultComponent, {
      panelClass: ['w100', 'h100'],
      autoFocus: false,
      data: { iAgenda: this.iAgenda, iLlegada: this.iLlegada }
    }).beforeClosed().subscribe(
      (r: boolean) => {

        this.dialog.close(true);

      });

  }

  async ngPostLlegada(model: ILlegada) {

    await this.service.ngPostLlegada(model)
      .then((r: IResponse) => {

        if (r.success) {

          this.ngDialogConsulta();

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

  async ngPutLlegada(option: number, model: ILlegada) {

    await this.service.ngPutLlegada(option, model)
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
