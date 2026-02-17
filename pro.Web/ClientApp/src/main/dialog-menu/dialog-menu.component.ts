import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IMenu, IResponse } from '../../interface/interface-pro.interface';
import { Message } from '../../message/message';
import { ServiceProService } from '../../service/service-pro.service';
import { Shared } from '../../shared/shared';

@Component({
  selector: 'app-dialog-menu',
  templateUrl: './dialog-menu.component.html',
  styleUrls: ['./dialog-menu.component.css']
})
export class DialogMenuComponent implements OnInit {
  expand: boolean = true;

  iMenu: IMenu;
  inMenu: IMenu[] = [];

  constructor(private cdr: ChangeDetectorRef, public shared: Shared, public dialog: MatDialogRef<DialogMenuComponent>, @Inject(MAT_DIALOG_DATA) public data: any, protected service: ServiceProService, public message: Message) {
    this.iMenu = data['model'];
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  ngClean(option: string, data?: any): void {

    switch (option) {
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
      case '': {
        break;
      }
    }
  }

  ngModelGet(option: string, data?: any): void {

    switch (option) {
      case 'iMenu': {
        const model: IMenu[] = data as IMenu[];
        this.inMenu = model;
        break;
      }

    }
  }

  ngController(option: string, data?: any): void {

    switch (option) {
      case 'getMenu': {
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

  ngHandle(option: string, data?: any): void {

    switch (option) {
      case 'handle': {

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
      case 'iMenu': {

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

  async ngGetMenu(option: number, model: IMenu) {

    await this.service.ngGetMenu(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('iMenu', r.data);
          this.ngValidate('iMenu');
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
