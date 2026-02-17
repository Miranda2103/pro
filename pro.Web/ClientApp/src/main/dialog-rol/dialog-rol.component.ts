import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IResponse, IRol } from '../../interface/interface-pro.interface';
import { Message } from '../../message/message';
import { ServiceProService } from '../../service/service-pro.service';
import { Shared } from '../../shared/shared';

@Component({
  selector: 'app-dialog-rol',
  templateUrl: './dialog-rol.component.html',
  styleUrls: ['./dialog-rol.component.css']
})
export class DialogRolComponent implements OnInit {
  expand: boolean = true;

  iRol: IRol;
  inRol: IRol[] = [];

  constructor(private cdr: ChangeDetectorRef, public shared: Shared, public dialog: MatDialogRef<DialogRolComponent>, @Inject(MAT_DIALOG_DATA) public data: any, protected service: ServiceProService, public message: Message) {
    this.iRol = data['model'];
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  ngClean(option: string, data?: any): void {

    switch (option) {
      case 'iRol': {
        this.iRol = { id: 0, rol: '', idOrganizacion: 0, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inRol': {
        this.inRol = [];
        break;
      }
      case 'iRol.rol': {
        this.iRol.rol = '';
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
      case 'iRol': {
        const model: IRol[] = data as IRol[];
        this.inRol = model;
        break;
      }

    }
  }

  ngController(option: string, data?: any): void {

    switch (option) {
      case 'getRol': {
        this.ngGetRol(3, this.iRol);
        break;
      }
      case 'postRol': {
        this.ngPostRol(this.iRol);
        break;
      }
      case 'putRol': {
        this.ngPutRol(1, this.iRol);
        break;
      }
    }

  }

  ngHandle(option: string, data?: any): void {

    switch (option) {
      case 'handle': {

        if (this.iRol.id == 0) {
          this.ngController('postRol');
        } else {
          this.ngController('putRol');
        }

        break;
      }
    }

  }

  ngValidate(option: string, data?: any): boolean {
    let b: boolean = true;

    switch (option) {
      case 'iRol.rol': {

        if (this.inRol.length) {
          this.message.dialogMessage('No es posible agregar el rol <b>' + this.iRol.rol + '</b> debido a que ya se encuentra agregado, intenta con uno diferente.');
          this.ngClean('iRol.rol');
          b = false;
        }

        break;
      }
    }

    return b;
  }

  async ngGetRol(option: number, model: IRol) {

    await this.service.ngGetRol(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('iRol', r.data);
          this.ngValidate('iRol.rol');
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

  async ngPostRol(model: IRol) {

    await this.service.ngPostRol(model)
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

  async ngPutRol(option: number, model: IRol) {

    await this.service.ngPutRol(option, model)
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
