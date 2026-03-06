import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IMenu, IResponse } from '../../interface/interface-pro.interface';
import { Message } from '../../message/message';
import { ServiceProService } from '../../service/service-pro.service';
import { Shared } from '../../shared/shared';
import { Snackbar } from '../../snackbar/snackbar';

@Component({
  selector: 'app-dialog-menu',
  templateUrl: './dialog-menu.component.html',
  styleUrls: ['./dialog-menu.component.css']
})
export class DialogMenuComponent implements OnInit {

  iMenu: IMenu;
  inMenu: IMenu[] = [];

  constructor(private cdr: ChangeDetectorRef, public shared: Shared, public dialog: MatDialogRef<DialogMenuComponent>, @Inject(MAT_DIALOG_DATA) public data: any, protected service: ServiceProService, public message: Message, public snackbar: Snackbar) {
    this.iMenu = data['model'];
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  ngClean(option: string, data?: any): void {

    switch (option) {
      case 'iMenu': {
        this.iMenu = { id: 0, menu: '', ruta: '', icono: '', orden: 0, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inMenu': {
        this.inMenu = [];
        break;
      }
      case 'iMenu.menu': {
        this.iMenu.menu = '';
        break;
      }
      case 'iMenu.icono': {
        this.iMenu.icono = '';
        break;
      }
      case 'iMenu.orden': {
        this.iMenu.orden = 0;
        break;
      }
    }

  }

  ngModelSet(option: string, data?: any): void {

    switch (option) {
      case 'getMenu': {

        break;
      }
    }
  }

  ngModelGet(option: string, data?: any): void {

    switch (option) {
      case 'getMenu': {
        this.ngClean('inMenu');
        const model: IMenu[] = data as IMenu[];
        this.inMenu = model;
        break;
      }

    }
  }

  ngHandle(option: string, data?: any): void {

    switch (option) {
      case 'menu': {

        if (this.iMenu.id == 0) {
          this.ngController('postMenu');
        } else {
          this.ngController('putMenu');
        }

        break;
      }
    }

  }

  ngValidate(option: string, data?: any): boolean {
    let b: boolean = true;

    switch (option) {
      case 'getMenu': {

        if (this.inMenu.length) {
          this.message.dialogMessage('No es posible agregar el rol <b>' + this.iMenu.menu + '</b> debido a que ya se encuentra agregado, intenta con uno diferente.');
          this.ngClean('iMenu.menu');
          b = false;
        }

        break;
      }
    }

    return b;
  }

  ngController(option: string, data?: any): void {

    switch (option) {
      case 'getMenu': {
        this.ngModelSet('getMenu');
        this.ngGetMenu(3, this.iMenu);
        break;
      }
      case 'postMenu': {
        this.ngPostMenu(this.iMenu);
        break;
      }
      case 'putMenu': {
        this.ngPutMenu(1, this.iMenu);
        break;
      }
    }

  }

  async ngGetMenu(option: number, model: IMenu) {

    await this.service.ngGetMenu(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getMenu', r.data);
          this.ngValidate('getMenu');
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

  async ngPostMenu(model: IMenu) {

    await this.service.ngPostMenu(model)
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

  async ngPutMenu(option: number, model: IMenu) {

    await this.service.ngPutMenu(option, model)
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
