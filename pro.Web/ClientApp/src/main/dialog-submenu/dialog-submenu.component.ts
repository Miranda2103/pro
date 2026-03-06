import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IMenu, IResponse, ISubMenu } from '../../interface/interface-pro.interface';
import { Message } from '../../message/message';
import { ServiceProService } from '../../service/service-pro.service';
import { Shared } from '../../shared/shared';

@Component({
  selector: 'app-dialog-submenu',
  templateUrl: './dialog-submenu.component.html',
  styleUrls: ['./dialog-submenu.component.css']
})
export class DialogSubMenuComponent implements OnInit {

  iSubMenu: ISubMenu;
  inSubMenu: ISubMenu[] = [];

  constructor(private cdr: ChangeDetectorRef, public shared: Shared, public dialog: MatDialogRef<DialogSubMenuComponent>, @Inject(MAT_DIALOG_DATA) public data: any, protected service: ServiceProService, public message: Message) {
    this.iSubMenu = data['model'];
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  ngClean(option: string, data?: any): void {

    switch (option) {
      case 'iSubMenu': {
        this.iSubMenu = { id: 0, idMenu: 0, subMenu: '', ruta: '', icono: '', orden: 0, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inSubMenu': {
        this.inSubMenu = [];
        break;
      }
      case 'iSubMenu.subMenu': {
        this.iSubMenu.subMenu = '';
        break;
      }
      case 'iSubMenu.icono': {
        this.iSubMenu.icono = '';
        break;
      }
      case 'iSubMenu.orden': {
        this.iSubMenu.orden = 0;
        break;
      }
    }

  }

  ngModelSet(option: string, data?: any): void {

    switch (option) {
      case 'getSubMenu': {

        break;
      }
    }
  }

  ngModelGet(option: string, data?: any): void {

    switch (option) {
      case 'getSubMenu': {
        this.ngClean('inRol');
        const model: ISubMenu[] = data as ISubMenu[];
        this.inSubMenu = model;
        break;
      }

    }
  }

  ngHandle(option: string, data?: any): void {

    switch (option) {
      case 'submenu': {

        if (this.iSubMenu.id == 0) {
          this.ngController('postSubMenu');
        } else {
          this.ngController('putSubMenu');
        }

        break;
      }
    }

  }

  ngValidate(option: string, data?: any): boolean {
    let b: boolean = true;

    switch (option) {
      case 'getSubMenu': {

        if (this.inSubMenu.length) {
          this.message.dialogMessage('No es posible agregar el SubMenu <b>' + this.iSubMenu.subMenu + '</b> debido a que ya se encuentra agregado, intenta con uno diferente.');
          this.ngClean('iSubMenu.submenu');
          b = false;
        }

        break;
      }
    }

    return b;
  }

  ngController(option: string, data?: any): void {

    switch (option) {
      case 'getSubMenu': {
        this.ngGetSubMenu(3, this.iSubMenu);
        break;
      }
      case 'postSubMenu': {
        this.ngPostSubMenu(this.iSubMenu);
        break;
      }
      case 'putSubMenu': {
        this.ngPutSubMenu(1, this.iSubMenu);
        break;
      }
    }

  }

  async ngGetSubMenu(option: number, model: ISubMenu) {

    await this.service.ngGetSubMenu(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getSubMenu', r.data);
          this.ngValidate('getSubMenu');
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

  async ngPostSubMenu(model: ISubMenu) {

    await this.service.ngPostSubMenu(model)
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

  async ngPutSubMenu(option: number, model: ISubMenu) {

    await this.service.ngPutSubMenu(option, model)
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
