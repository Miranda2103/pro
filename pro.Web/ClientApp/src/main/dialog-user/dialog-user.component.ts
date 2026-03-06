import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IResponse, IRol, IUsuario } from '../../interface/interface-pro.interface';
import { Message } from '../../message/message';
import { ServiceProService } from '../../service/service-pro.service';
import { Shared } from '../../shared/shared';

@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.css']
})
export class DialogUserComponent implements OnInit {

  input: String = '';

  iUsuario: IUsuario;
  inUsuario: IUsuario[] = [];

  iRol: IRol;
  inRol: IRol[] = [];
  filteredRol: IRol[] = [];

  constructor(private cdr: ChangeDetectorRef, public shared: Shared, public dialog: MatDialogRef<DialogUserComponent>, @Inject(MAT_DIALOG_DATA) public data: any, protected service: ServiceProService, public message: Message) {
    this.iUsuario = data['model'];
  }

  ngOnInit(): void {
    this.ngInput();
    this.ngHandle('reset');
    this.ngHandle('getRol');
  }

  ngAfterViewInit(): void {
  }

  ngClean(option: string, data?: any): void {

    switch (option) {
      case 'iUsuario': {
        this.iUsuario = { id: 0, usuario: '', contrasena: '', nombre: '', apellidoPaterno: '', apellidoMaterno: '', nombreCompleto: '', cambiaContrasena: false, idRol: 0, idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inUsuario': {
        this.inUsuario = [];
        break;
      }
      case 'iRol': {
        this.iRol = { id: 0, rol: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inRol': {
        this.inRol = [];
        this.filteredRol = [];
        break;
      }
      case 'iUsuario.usuario': {
        this.iUsuario.usuario = '';
        break;
      }
      case 'iUsuario.contrasena': {
        this.iUsuario.contrasena = '';
        break;
      }
      case 'iUsuario.nombre': {
        this.iUsuario.nombre = '';
        break;
      }
      case 'iUsuario.apellidoPaterno': {
        this.iUsuario.apellidoPaterno = '';
        break;
      }
      case 'iUsuario.apellidoMaterno': {
        this.iUsuario.apellidoMaterno = '';
        break;
      }
      case 'iUsuario.idRol': {
        this.iUsuario.idRol = 0;
        let event: MouseEvent = data;
        event.stopPropagation();
        break;
      }
    }

  }

  ngModelSet(option: string, data?: any): void {

    switch (option) {
      case 'getRol': {
        this.ngClean('iRol');
        break;
      }
      case 'getUsuario': {
        
        break;
      }
    }
  }

  ngModelGet(option: string, data?: any): void {

    switch (option) {
      case 'getRol': {
        this.ngClean('inRol');
        const model: IRol[] = data as IRol[];
        this.inRol = model;
        this.filteredRol = this.inRol;
        break;
      }
      case 'getUsuario': {
        this.ngClean('inUsuario');
        const model: IUsuario[] = data as IUsuario[];
        this.inUsuario = model;
        break;
      }
    }

  }

  ngHandle(option: string, data?: any): void {

    switch (option) {
      case 'getRol': {
        this.ngController('getRol');
        break;
      }
      case 'getUsuario': {
        this.ngController('getUsuario');
        break;
      }
      case 'reset': {

        if (this.iUsuario.id == 0) {
          this.ngResetPassword();
        }

        break;
      }
      case 'usuario': {

        if (this.iUsuario.id == 0) {
          this.ngController('postUsuario');
        }
        else {
          this.ngController('putUsuario');
        }

        break;
      }
    }
  }


  ngValidate(option: string, data?: any): boolean {
    let b: boolean = true;

    switch (option) {
      case 'getUsuario': {

        if (this.inUsuario.length) {
          this.message.dialogMessage('No es posible agregar el usuario <b>' + this.iUsuario.usuario + '</b> debido a que ya se encuentra agregado, intenta con uno diferente.');
          this.ngClean('iUsuario.usuario');
          b = false;
        }

        break;
      }
    }

    return b;
  }

  ngController(option: string, data?: any): void {

    switch (option) {
      case 'getRol': {
        this.ngModelSet('getRol');
        this.ngGetRol(2, this.iRol);
        break;
      }
      case 'getUsuario': {
        this.ngModelSet('getUsuario');
        this.ngGetUsuario(3, this.iUsuario);
        break;
      }
      case 'postUsuario': {
        this.ngPostUsuario(this.iUsuario);
        break;
      }
      case 'putUsuario': {
        this.ngPutUsuario(1, this.iUsuario);
        break;
      }
    }

  }

  async ngGetRol(option: number, model: IRol) {

    await this.service.ngGetRol(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getRol', r.data);
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

  async ngGetUsuario(option: number, model: IUsuario) {

    await this.service.ngGetUsuario(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getUsuario', r.data);
          this.ngValidate('getUsuario');
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

  async ngPostUsuario(model: IUsuario) {

    await this.service.ngPostUsuario(model)
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

  async ngPutUsuario(option: number, model: IUsuario) {

    await this.service.ngPutUsuario(option, model)
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

  ngInput(): void {
    this.input = (this.iUsuario.id == 0 ? 'text' : 'password');
  }

  ngResetPassword() {
    this.iUsuario.contrasena = this.shared.ngPassword();
    this.input = 'text';
  }

}
