import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IResponse, IUsuario } from '../../interface/interface-pro.interface';
import { Message } from '../../message/message';
import { ServiceProService } from '../../service/service-pro.service';
import { Shared } from '../../shared/shared';

@Component({
  selector: 'app-dialog-change-password',
  templateUrl: './dialog-change-password.component.html',
  styleUrls: ['./dialog-change-password.component.css']
})
export class DialogChangePasswordComponent {
  expand: boolean = true;

  iUsuario: IUsuario;

  contrasenaNueva: string = '';
  contrasenaConfirma: string = '';

  constructor(public shared: Shared, public dialog: MatDialogRef<DialogChangePasswordComponent>, @Inject(MAT_DIALOG_DATA) public data: any, protected servicePro: ServiceProService, public message: Message) {
    this.iUsuario = data['model'];
  }

  ngClean(option: string, data?: any): void {

    switch (option) {
      case '': {
        
        break;
      }
    }

  }

  ngModelSet(option: string, data?: any): void {

    switch (option) {
      case 'iUsuario': {
        this.iUsuario.contrasena = this.contrasenaNueva;
        break;
      }
    }

  }

  ngController(option: string, data?: any): void {

    switch (option) {
      case 'putUsuario': {
        this.ngModelSet('iUsuario');
        this.ngPutUsuario(2, this.iUsuario);
        break;
      }
    }

  }

  ngHandle(option: string, data?: any): void {

    switch (option) {
      case 'handle': {

        if (this.ngValidate('validate')) {
          this.ngController('putUsuario');
        }

        break;
      }
    }

  }

  ngValidate(option: string, data?: any): boolean {
    let b: boolean = true;

    switch (option) {
      case 'validate': {
        if (this.contrasenaNueva != this.contrasenaConfirma) {
          b = false;
          this.message.dialogMessage('Contraseñas incorrectas, ingresa nuevamente la contraseña y confirma.');
        }
        break;
      }
    }

    return b;
  }

  async ngPutUsuario(option: number, model: IUsuario) {

    await this.servicePro.ngPutUsuario(option, model)
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
