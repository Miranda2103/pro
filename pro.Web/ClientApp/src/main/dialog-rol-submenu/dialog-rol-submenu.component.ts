import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { saveAs } from 'file-saver';
import { IFiltro, IFiltroLista, IFiltroTotal, IResponse, IRolMenuVista, IRolSubMenu, IRolSubMenuVista, ISubMenu } from '../../interface/interface-pro.interface';
import { Message } from '../../message/message';
import { ServiceProService } from '../../service/service-pro.service';
import { Shared } from '../../shared/shared';
import { DialogSubMenuComponent } from '../dialog-submenu/dialog-submenu.component';

@Component({
  selector: 'app-dialog-rol-submenu',
  templateUrl: './dialog-rol-submenu.component.html',
  styleUrls: ['./dialog-rol-submenu.component.css']
})
export class DialogRolSubMenuComponent implements OnInit {
  idRol: number = 0;
  iRolMenuVista: IRolMenuVista;

  @ViewChild(MatSort) sort: MatSort;
  expand: boolean = true;

  iFiltro: IFiltro;
  inFiltroLista: IFiltroLista[] = [];
  inFiltroTotal: IFiltroTotal[] = [];
  inFiltroVista: IRolSubMenuVista[] = [];

  length: number = 0;
  pageIndex: number = 1;
  pageSize: number = 100;
  pageSizeOptions: number[] = [100, 250, 500, 1000];

  active: string = '';
  direction: string = '';

  filter: string = '';
  column: string = '';
  value: string = '';

  ds = new MatTableDataSource<IRolSubMenuVista>();
  fl: string[] = ['editar-fl', 'subMenu-fl', 'icono-fl', 'orden-fl', 'activo-fl'];
  dc: string[] = ['editar', 'subMenu', 'icono', 'orden', 'activo'];
  search: string = '';
  selection = new SelectionModel<IRolSubMenuVista>(true, []);

  subMenu: string = '';
  icono: string = '';
  orden: string = '';
  activo: string[] = [];

  iSubMenu: ISubMenu;
  inSubMenu: ISubMenu[] = [];

  iRolSubMenu: IRolSubMenu;
  inRolSubMenu: IRolSubMenu[] = [];

  constructor(private cdr: ChangeDetectorRef, public shared: Shared, public dialog: MatDialogRef<DialogRolSubMenuComponent>, @Inject(MAT_DIALOG_DATA) public data: any, protected service: ServiceProService, public message: Message, public _dialog: MatDialog) {
    this.idRol = data['idRol'];
    this.iRolMenuVista = data['iRolMenuVista'];
  }

  ngOnInit(): void {
    this.ngController('getFiltroLista');
  }

  ngAfterViewInit(): void {
  }

  ngClean(option: string, data?: any): void {

    switch (option) {
      case 'iFiltro': {
        this.iFiltro = { idOrganizacion: this.shared.idOrganizacion, idRol: this.idRol, idMenu: this.iRolMenuVista.idMenu, fechaInicio: '', fechaFin: '', registros: this.pageSize, pagina: this.pageIndex, ordenColumna: '', ordenValor: '', filtro: '', filtroColumna: '', filtroValor: '', formato: '' };
        break;
      }
      case 'inFiltroLista': {
        this.inFiltroLista = [];
        break;
      }
      case 'inFiltroTotal': {
        this.inFiltroTotal = [];
        break;
      }
      case 'inFiltroVista': {
        this.inFiltroVista = [];
        this.ngHandleSource();
        break;
      }
      case 'page': {
        this.length = 0;
        this.pageIndex = 1;
        this.pageSize = 100;
        this.pageSizeOptions = [100, 250, 500, 1000];
        break;
      }
      case 'sort': {
        this.active = '';
        this.direction = '';
        this.sort.active = '';
        this.sort.direction = '';
        this.sort.sortChange.emit({ active: '', direction: '' });
        (this.sort as any)._stateChanges.next();
        break;
      }
      case 'filter': {
        this.filter = '';
        this.column = '';
        this.value = '';
        break;
      }
      case 'search': {
        this.search = '';
        break;
      }
      case 'selection': {
        this.selection = new SelectionModel<IRolSubMenuVista>(true, []);
        break;
      }
      case 'header': {
        this.subMenu = '';
        this.icono = '';
        this.orden = '';
        this.activo = [];
        break;
      }
      case 'iModel': {
        this.iSubMenu = { id: 0, idMenu: this.iRolMenuVista.idMenu, subMenu: '', ruta: '', icono: '', orden: 0, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inModel': {
        this.inSubMenu = [];
        break;
      }
      case 'iEntity': {
        this.iRolSubMenu = { id: 0, idRol: this.idRol, idMenu: this.iRolMenuVista.idMenu, idSubMenu: 0, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inEntity': {
        this.inRolSubMenu = [];
        break;
      }
    }

  }

  ngModelSet(option: string, data?: any): void {

    switch (option) {
      case 'iFiltroLista': {
        this.ngClean('iFiltro');
        break;
      }
      case 'iFiltroTotal': {
        this.ngClean('iFiltro');
        this.iFiltro.filtro = this.filter;
        this.iFiltro.filtroColumna = this.column;
        this.iFiltro.filtroValor = this.value;
        break;
      }
      case 'iFiltroVista': {
        this.ngClean('iFiltro');
        this.ngClean('selection');
        this.iFiltro.registros = this.pageSize;
        this.iFiltro.pagina = this.pageIndex;
        this.iFiltro.ordenColumna = this.active;
        this.iFiltro.ordenValor = this.direction;
        this.iFiltro.filtro = this.filter;
        this.iFiltro.filtroColumna = this.column;
        this.iFiltro.filtroValor = this.value;
        break;
      }
      case 'iFiltroExportar': {
        this.ngClean('iFiltro');
        this.iFiltro.ordenColumna = this.active;
        this.iFiltro.ordenValor = this.direction;
        this.iFiltro.filtro = this.filter;
        this.iFiltro.filtroColumna = this.column;
        this.iFiltro.filtroValor = this.value;
        this.iFiltro.formato = this.shared.extension;
        break;
      }
      case 'iModelCreate': {
        this.ngClean('iModel');
        break;
      }
      case 'iModelUpdate': {
        this.ngClean('iModel');
        const model: IRolSubMenuVista = data as IRolSubMenuVista;
        this.iSubMenu.id = model.idSubMenu;
        this.iSubMenu.subMenu = model.subMenu;
        this.iSubMenu.icono = model.icono;
        this.iSubMenu.orden = model.orden;
        break;
      }
      case 'iModelDelete': {
        this.ngClean('inEntity');
        this.inRolSubMenu.push({ id: 0, idRol: this.idRol, idMenu: this.iRolMenuVista.idMenu, idSubMenu: 0, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaDefault(), activo: false });
        break;
      }
      case 'iModelPost': {
        this.ngClean('inEntity');
        this.inRolSubMenu = this.inFiltroVista.map(v => ({ id: 0, idRol: this.idRol, idMenu: this.iRolMenuVista.idMenu, idSubMenu: v.idSubMenu, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaDefault(), activo: v.activo }));
        break;
      }
    }

  }

  ngModelGet(option: string, data?: any): void {

    switch (option) {
      case 'iFiltroLista': {
        this.ngClean('inFiltroLista');
        const model: IFiltroLista[] = data as IFiltroLista[];
        this.inFiltroLista = model;
        break;
      }
      case 'iFiltroTotal': {
        this.ngClean('inFiltroTotal');
        const model: IFiltroTotal[] = data as IFiltroTotal[];
        this.inFiltroTotal = model;
        break;
      }
      case 'iFiltroVista': {
        this.ngClean('inFiltroVista');
        const model: IRolSubMenuVista[] = data as IRolSubMenuVista[];
        this.inFiltroVista = model;
        this.ngHandleSource();
        break;
      }
      case 'iFiltroExportar': {
        const blob = new Blob([data], { type: (this.shared.extension == '.csv' ? 'text/csv;charset=utf-8' : 'application/vnd.ms-excel') });
        saveAs(blob, 'RolSubMenus' + '_' + this.shared.ngExportDate() + this.shared.extension);
        break;
      }
    }

  }

  ngController(option: string, data?: any): void {

    switch (option) {
      case 'getFiltroLista': {
        this.ngModelSet('iFiltroLista');
        this.ngGetFiltroLista(this.iFiltro);
        break;
      }
      case 'getFiltroTotal': {
        this.ngModelSet('iFiltroTotal');
        this.ngGetFiltroTotal(this.iFiltro);
        break;
      }
      case 'getFiltroVista': {
        this.ngModelSet('iFiltroVista');
        this.ngGetFiltroVista(this.iFiltro);
        break;
      }
      case 'getFiltroExportar': {
        this.ngModelSet('iFiltroExportar');
        this.ngGetFiltroExportar(this.iFiltro);
        break;
      }
      case 'deleteRolSubMenu': {
        this.ngModelSet('iModelDelete');
        this.ngDeleteRolSubMenu(1, this.inRolSubMenu);
        break;
      }
      case 'postRolSubMenu': {
        this.ngModelSet('iModelPost');
        this.ngPostRolSubMenu(this.inRolSubMenu);
        break;
      }
    }

  }

  ngHandle(option: string, data?: any): void {

    switch (option) {
      case '': {
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

  ngDialog(option: string, model?: IRolSubMenuVista): void {

    switch (option) {
      case 'iModelCreate': {
        this.ngModelSet('iModelCreate');
        break;
      }
      case 'iModelUpdate': {
        this.ngModelSet('iModelUpdate', model);
        break;
      }
    }

    this._dialog.open(DialogSubMenuComponent, {
      panelClass: ['w100', 'h100'],
      autoFocus: false,
      data: { model: this.iSubMenu }
    }).beforeClosed().subscribe(
      (r: boolean) => {

        if (r) {
          this.ngController('getFiltroLista');
        }

      });

  }

  async ngGetFiltroLista(model: IFiltro) {

    await this.service.ngGetRolSubMenuLista(model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('iFiltroLista', r.data);
          this.ngController('getFiltroTotal');
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

  async ngGetFiltroTotal(model: IFiltro) {

    await this.service.ngGetRolSubMenuTotal(model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('iFiltroTotal', r.data);
          this.ngController('getFiltroVista');
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

  async ngGetFiltroVista(model: IFiltro) {

    await this.service.ngGetRolSubMenuVista(model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('iFiltroVista', r.data);
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

  async ngGetFiltroExportar(model: IFiltro) {

    await this.service.ngGetRolSubMenuExportar(model)
      .then((r) => {

        this.ngModelGet('iFiltroExportar', r);

      }).catch(
        (e: any) => {
          console.error(e);
          this.message.dialogMessage(e['message']);
        }
      ).finally(() => { });

  }

  async ngDeleteRolSubMenu(option: number, model: IRolSubMenu[]) {

    await this.service.ngDeleteRolSubMenu(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngController('postRolSubMenu');
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

  async ngPostRolSubMenu(model: IRolSubMenu[]) {

    await this.service.ngPostRolSubMenu(model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngController('getFiltroLista');
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

  ngHandleSource(): void {
    this.ds = new MatTableDataSource<IRolSubMenuVista>(this.inFiltroVista);
    this.length = this.inFiltroTotal[0].total;
  }

  ngHandlePage(event: PageEvent) {
    this.pageIndex = (event.pageIndex + 1);
    this.pageSize = event.pageSize;
    this.ngHandleSearch('selection');
  }

  ngHandleSort(event: Sort) {
    this.active = event.active;
    this.direction = event.direction;
    this.ngHandleSearch('selection');
  }

  ngHandleList(lista: number) {

    const regexFecha: RegExp = /^\d{2}\/\d{2}\/\d{4}$/;
    const inFiltroLista: IFiltroLista[] = this.inFiltroLista.filter(r => r.lista == lista);

    if (inFiltroLista.length) {

      if (inFiltroLista.filter(u => regexFecha.test(u.valor)).length) {
        return this.inFiltroLista.filter(r => r.lista == lista).sort((a, b) => { const dateA = new Date(a.valor.split('/').reverse().join('/')); const dateB = new Date(b.valor.split('/').reverse().join('/')); return dateA.getTime() - dateB.getTime(); });
      } else {
        return this.inFiltroLista.filter(r => r.lista == lista).sort((a, b) => a.valor.localeCompare(b.valor));
      }

    }

  }

  ngHandleSanitize(value: string): string {
    return encodeURIComponent(value.trim());
  }

  ngHandleFilter(option: string) {
    this.ngClean('filter');

    switch (option) {
      case 'full': {

        this.filter += '1'.concat('|');
        this.column += 'SubMenu'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        this.filter += '1'.concat('|');
        this.column += 'Icono:'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        this.filter += '1'.concat('|');
        this.column += 'Orden'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        break;
      }
      case 'selection': {

        if (this.subMenu) {
          this.filter += '2'.concat('|');
          this.column += 'SubMenu'.concat('|');
          this.value += this.ngHandleSanitize(this.subMenu).concat('|');
        }

        if (this.icono) {
          this.filter += '2'.concat('|');
          this.column += 'Icono'.concat('|');
          this.value += this.ngHandleSanitize(this.icono).concat('|');
        }

        if (this.orden) {
          this.filter += '2'.concat('|');
          this.column += 'Orden'.concat('|');
          this.value += this.ngHandleSanitize(this.orden).concat('|');
        }

        if (this.activo.length) {
          this.filter += '3'.concat('|');
          this.column += 'Activo'.concat('|');
          this.value += this.activo.join(',').concat('|');
        }

        break;
      }
    }

    this.filter = (this.filter ? this.filter.slice(0, -1) : '');
    this.column = (this.column ? this.column.slice(0, -1) : '');
    this.value = (this.value ? this.value.slice(0, -1) : '');

    this.ngHandleSearch('selection');
  }

  ngHandleSearch(option: string): void {

    switch (option) {
      case 'full': {
        this.ngClean('page');
        this.ngClean('sort');
        this.ngClean('filter');
        this.ngClean('search');
        this.ngClean('selection');
        this.ngClean('header');
        this.ngController('getFiltroLista');
        break;
      }
      case 'selection': {
        this.ngController('getFiltroLista');
        break;
      }
    }

  }

}
