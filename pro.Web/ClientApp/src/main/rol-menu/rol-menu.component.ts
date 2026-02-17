import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { saveAs } from 'file-saver';
import { IFiltro, IFiltroLista, IFiltroTotal, IMenu, IResponse, IRol, IRolMenu, IRolMenuVista } from '../../interface/interface-pro.interface';
import { Message } from '../../message/message';
import { ServiceProService } from '../../service/service-pro.service';
import { Shared } from '../../shared/shared';
import { DialogMenuComponent } from '../dialog-menu/dialog-menu.component';
import { DialogRolSubMenuComponent } from '../dialog-rol-submenu/dialog-rol-submenu.component';

@Component({
  selector: 'app-rol-menu',
  templateUrl: './rol-menu.component.html',
  styleUrls: ['./rol-menu.component.css']
})
export class RolMenuComponent implements OnInit {
  iRol: IRol;
  inRol: IRol[] = [];
  idRol: number = 0;
  filteredRol: IRol[] = [];

  @ViewChild(MatSort) sort: MatSort;

  iFiltro: IFiltro;
  inFiltroLista: IFiltroLista[] = [];
  inFiltroTotal: IFiltroTotal[] = [];
  inFiltroVista: IRolMenuVista[] = [];

  length: number = 0;
  pageIndex: number = 1;
  pageSize: number = 100;
  pageSizeOptions: number[] = [100, 250, 500, 1000];

  active: string = '';
  direction: string = '';

  filter: string = '';
  column: string = '';
  value: string = '';

  ds = new MatTableDataSource<IRolMenuVista>();
  fl: string[] = ['editar-fl', 'menu-fl', 'icono-fl', 'orden-fl', 'activo-fl', 'submenu-fl'];
  dc: string[] = ['editar', 'menu', 'icono', 'orden', 'activo', 'submenu'];
  search: string = '';
  selection = new SelectionModel<IRolMenuVista>(true, []);

  menu: string = '';
  icono: string = '';
  orden: string = '';
  activo: string[] = [];

  iMenu: IMenu;
  inMenu: IMenu[] = [];

  iRolMenu: IRolMenu;
  inRolMenu: IRolMenu[] = [];

  constructor(private cdr: ChangeDetectorRef, public shared: Shared, public message: Message, public dialog: MatDialog, public service: ServiceProService) {
  }

  ngOnInit(): void {
    this.ngController('getRol');
  }

  ngAfterViewInit(): void {
  }

  ngClean(option: string, data?: any): void {

    switch (option) {
      case 'iRol': {
        this.iRol = { id: 0, rol: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inRol': {
        this.inRol = [];
        break;
      }
      case 'iFiltro': {
        this.iFiltro = { idOrganizacion: this.shared.idOrganizacion, idRol: this.idRol, idMenu: 0, registros: this.pageSize, pagina: this.pageIndex, ordenColumna: '', ordenValor: '', filtro: '', filtroColumna: '', filtroValor: '', formato: '' };
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
        this.selection = new SelectionModel<IRolMenuVista>(true, []);
        break;
      }
      case 'header': {
        this.menu = '';
        this.icono = '';
        this.orden = '';
        this.activo = [];
        break;
      }
      case 'iModel': {
        this.iMenu = { id: 0, menu: '', ruta: '', icono: '', orden: 0, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inModel': {
        this.inMenu = [];
        break;
      }
      case 'iEntity': {
        this.iRolMenu = { id: 0, idRol: 0, idMenu: 0, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inEntity': {
        this.inRolMenu = [];
        break;
      }
    }

  }

  ngModelSet(option: string, data?: any): void {

    switch (option) {
      case 'iRol': {
        this.ngClean('iRol');
        break;
      }
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
        const model: IRolMenuVista = data as IRolMenuVista;
        this.iMenu.id = model.idMenu;
        this.iMenu.menu = model.menu;
        this.iMenu.icono = model.icono;
        this.iMenu.orden = model.orden;
        break;
      }
      case 'iModelDelete': {
        this.ngClean('inEntity');
        this.inRolMenu.push({ id: 0, idRol: this.idRol, idMenu: 0, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaDefault(), activo: false });
        break;
      }
      case 'iModelPost': {
        this.ngClean('inEntity');
        this.inRolMenu = this.inFiltroVista.map(v => ({ id: 0, idRol: this.idRol, idMenu: v.idMenu, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaDefault(), activo: v.activo }));
        break;
      }
    }
  }

  ngModelGet(option: string, data?: any): void {

    switch (option) {
      case 'iRol': {
        const model: IRol[] = data as IRol[];
        this.inRol = model;
        this.filteredRol = model;
        break;
      }
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
        const model: IRolMenuVista[] = data as IRolMenuVista[];
        this.inFiltroVista = model;
        this.ngHandleSource();
        break;
      }
      case 'iFiltroExportar': {
        const blob = new Blob([data], { type: (this.shared.extension == '.csv' ? 'text/csv;charset=utf-8' : 'application/vnd.ms-excel') });
        saveAs(blob, 'Rols' + '_' + this.shared.ngExportDate() + this.shared.extension);
        break;
      }
    }
  }

  ngController(option: string, data?: any): void {

    switch (option) {
      case 'getRol': {
        this.ngModelSet('iRol');
        this.ngGetRol(2, this.iRol);
        break;
      }
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
      case 'deleteRolMenu': {
        this.ngModelSet('iModelDelete');
        this.ngDeleteRolMenu(1, this.inRolMenu);
        break;
      }
      case 'postRolMenu': {
        this.ngModelSet('iModelPost');
        this.ngPostRolMenu(this.inRolMenu);
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

  ngDialog(option: string, model?: IRolMenuVista): void {

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

    this.dialog.open(DialogMenuComponent, {
      panelClass: ['w100', 'h100'],
      autoFocus: false,
      data: { model: this.iMenu }
    }).beforeClosed().subscribe(
      (r: boolean) => {

        if (r) {
          this.ngController('getFiltroLista');
        }

      });

  }

  ngDialogRolSubMenu(iRolMenuVista: IRolMenuVista): void {

    this.dialog.open(DialogRolSubMenuComponent, {
      panelClass: ['w100', 'h100'],
      autoFocus: false,
      data: { idRol: this.idRol, iRolMenuVista: iRolMenuVista }
    }).beforeClosed().subscribe(
      (r: boolean) => {

        if (r) {

        }

      });

  }

  async ngGetRol(option: number, model: IRol) {

    await this.service.ngGetRol(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('iRol', r.data);
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

  async ngGetFiltroLista(model: IFiltro) {

    await this.service.ngGetRolMenuLista(model)
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

    await this.service.ngGetRolMenuTotal(model)
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

    await this.service.ngGetRolMenuVista(model)
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

    await this.service.ngGetRolMenuExportar(model)
      .then((r) => {

        this.ngModelGet('iFiltroExportar', r);

      }).catch(
        (e: any) => {
          console.error(e);
          this.message.dialogMessage(e['message']);
        }
      ).finally(() => { });

  }

  async ngDeleteRolMenu(option: number, model: IRolMenu[]) {

    await this.service.ngDeleteRolMenu(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngController('postRolMenu');
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

  async ngPostRolMenu(model: IRolMenu[]) {

    await this.service.ngPostRolMenu(model)
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
    this.ds = new MatTableDataSource<IRolMenuVista>(this.inFiltroVista);
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
        this.column += 'Menu'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        this.filter += '1'.concat('|');
        this.column += 'Icono'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        this.filter += '1'.concat('|');
        this.column += 'Orden'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        break;
      }
      case 'selection': {

        if (this.menu) {
          this.filter += '2'.concat('|');
          this.column += 'Menu'.concat('|');
          this.value += this.ngHandleSanitize(this.menu).concat('|');
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
