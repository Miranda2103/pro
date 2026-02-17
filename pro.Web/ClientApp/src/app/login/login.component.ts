import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IAutenticacion, IResponse, IToken, IUsuario, IVersion } from '../../interface/interface-pro.interface';
import { Message } from '../../message/message';
import { ServiceProService } from '../../service/service-pro.service';
import { Shared } from '../../shared/shared';
import { DialogChangePasswordComponent } from '../dialog-change-password/dialog-change-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  usuario: string = '';
  contrasena: string = ''

  iAutenticacion: IAutenticacion;
  iUsuario: IUsuario;

  constructor(private cdr: ChangeDetectorRef, public message: Message, public servicePro: ServiceProService, private router: Router, public shared: Shared, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.ngController('getVersion');
  }

  ngAfterViewInit(): void { }

  ngClean(option: string, data?: any): void {

    switch (option) {
      case 'login': {
        this.usuario = '';
        this.contrasena = '';
        break;
      }
      case 'iAutenticacion': {
        this.iAutenticacion = { usuario: '', contrasena: '' };
        break;
      }
      case 'iUsuario': {
        this.iUsuario = { id: 0, usuario: '', contrasena: '', nombre: '', apellidoPaterno: '', apellidoMaterno: '', nombreCompleto: '', cambiaContrasena: false, idRol: 0, idOrganizacion: 0, idUsuarioInserta: this.shared.idUsuarioSistema, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuarioSistema, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
    }

  }

  ngModelSet(option: string, data?: any): void {

    switch (option) {
      case 'iAutenticacion': {
        this.ngClean('iAutenticacion');
        this.iAutenticacion.usuario = this.usuario;
        this.iAutenticacion.contrasena = this.contrasena;
        break;
      }
      case 'iUsuario': {
        this.ngClean('iUsuario');
        this.iUsuario.id = this.shared.idUsuario;
        this.iUsuario.usuario = this.usuario;
        this.iUsuario.contrasena = this.contrasena;
        break;
      }
    }

  }

  ngModelGet(option: string, data?: any): void {

    switch (option) {
      case 'iVersion': {
        const model: IVersion = data as IVersion;
        this.shared.version = model.version;
        break;
      }
      case 'iToken': {
        const model: IToken = data as IToken;
        this.shared.idUsuario = model.id;
        this.shared.usuario = model.usuario;
        this.shared.nombreUsuario = model.nombreUsuario;
        this.shared.cambiaContrasena = model.cambiaContrasena;
        this.shared.idRol = model.idRol;
        this.shared.idOrganizacion = model.idOrganizacion;
        window.localStorage.setItem('token', model.token);
        this.shared.complete = true;
        break;
      }
    }

  }

  ngController(option: string, data?: any): void {

    switch (option) {
      case 'getVersion': {
        this.ngGetVersion();
        break;
      }
      case 'postToken': {
        this.ngModelSet('iAutenticacion');
        this.ngPostToken(this.iAutenticacion);
        break;
      }
    }

  }

  ngHandle(option: string, data?: any): void {

    switch (option) {
      case 'login': {

        if (this.ngValidate('login')) {
          this.ngController('postToken');
        }

        break;
      }
      case 'password': {

        if (this.shared.cambiaContrasena) {
          this.ngHandle('navigate');
        } else {
          this.ngDialogCambiaContrasena();
        }

        break;
      }
      case 'navigate': {

        this.router.navigate(['main/home']);

        break;
      }
    }

  }

  ngValidate(option: string, data?: any): boolean {
    let b: boolean = true;

    switch (option) {
      case 'login': {

        if (this.usuario == '') {
          b = false;
          this.message.dialogMessage('Ingresa tu usuario.');
        } else if (this.contrasena == '') {
          b = false;
          this.message.dialogMessage('Ingresa tu contraseña.');
        }

        break;
      }
    }

    return b;
  }

  ngDialogCambiaContrasena(): void {
    this.ngModelSet('iUsuario');

    this.dialog.open(DialogChangePasswordComponent, {
      panelClass: ['w100', 'h100'],
      autoFocus: false,
      data: { 'model': this.iUsuario }
    }).beforeClosed().subscribe(
      (r: boolean) => {

        if (r) {
          this.ngHandle('navigate');
        }

      });

  }

  ngGetVersion() {

    this.servicePro.ngGetVersion()
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('iVersion', r.data);
        }
        else {
          this.message.dialogMessage(this.shared.ngFalse());
        }

      }).catch(
        (e: any) => {
          this.message.dialogMessage(this.shared.ngError(e));
        }
      ).finally(() => { });

  }

  async ngPostToken(model: IAutenticacion) {

    await this.servicePro.ngPostToken(model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('iToken', r.data);
          this.ngHandle('password');
        }
        else {
          this.message.dialogMessage('Usuario y/o Contraseña incorrectos');
        }

      }).catch(
        (e: any) => {
          this.message.dialogMessage(this.shared.ngError(e));
        }
      ).finally(() => { });

  }

  ngSpecialChar(event: KeyboardEvent) {
    let k: number = 0;
    k = event.charCode;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
  }

  ngKeyUp(): void {
    if (this.iUsuario.usuario != '' && this.iUsuario.contrasena != '') {
      this.ngController('postToken');
    }
  }

}
