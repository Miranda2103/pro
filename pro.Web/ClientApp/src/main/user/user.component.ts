import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { saveAs } from 'file-saver';
import { IFiltro, IFiltroLista, IFiltroTotal, IResponse, IUsuario, IUsuarioView, IUsuarioVista } from '../../interface/interface-pro.interface';
import { Message } from '../../message/message';
import { ServiceProService } from '../../service/service-pro.service';
import { Shared } from '../../shared/shared';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;

  iFiltro: IFiltro;
  inFiltroLista: IFiltroLista[] = [];
  inFiltroTotal: IFiltroTotal[] = [];
  inFiltroVista: IUsuarioVista[] = [];

  length: number = 0;
  pageIndex: number = 1;
  pageSize: number = 100;
  pageSizeOptions: number[] = [100, 250, 500, 1000];

  active: string = '';
  direction: string = '';

  filter: string = '';
  column: string = '';
  value: string = '';

  ds = new MatTableDataSource<IUsuarioVista>();
  fl: string[] = ['editar-fl', 'usuario-fl', 'nombreCompleto-fl', 'rol-fl', 'fecha-fl', 'hora-fl', 'user-fl', 'nombreUsuario-fl', 'activo-fl'];
  dc: string[] = ['editar', 'usuario', 'nombreCompleto', 'rol', 'fecha', 'hora', 'user', 'nombreUsuario', 'activo'];
  search: string = '';
  selection = new SelectionModel<IUsuarioVista>(true, []);

  usuario: string = '';
  nombreCompleto: string = '';
  rol: string[] = [];
  fecha: string[] = [];
  hora: string = '';
  user: string[] = [];
  nombreUsuario: string[] = [];
  activo: string[] = [];

  iUsuario: IUsuario;
  inUsuario: IUsuario[] = [];

  constructor(private cdr: ChangeDetectorRef, public shared: Shared, public message: Message, public dialog: MatDialog, public service: ServiceProService) {
  }

  ngOnInit(): void {
    this.ngController('getFiltroLista');
  }

  ngAfterViewInit(): void {
  }

  ngClean(option: string, data?: any): void {

    switch (option) {
      case 'iFiltro': {
        this.iFiltro = { idOrganizacion: this.shared.idOrganizacion, idRol: 0, idMenu: 0, fechaInicio: '', fechaFin: '', registros: this.pageSize, pagina: this.pageIndex, ordenColumna: '', ordenValor: '', filtro: '', filtroColumna: '', filtroValor: '', formato: '' };
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
        this.selection = new SelectionModel<IUsuarioVista>(true, []);
        break;
      }
      case 'header': {
        this.usuario = '';
        this.nombreCompleto = '';
        this.rol = [];
        this.fecha = [];
        this.hora = '';
        this.user = [];
        this.nombreUsuario = [];
        this.activo = [];
        break;
      }
      case 'iUsuario': {
        this.iUsuario = { id: 0, usuario: '', contrasena: '', nombre: '', apellidoPaterno: '', apellidoMaterno: '', nombreCompleto: '', cambiaContrasena: false, idRol: 0, idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inUsuario': {
        this.inUsuario = [];
        break;
      }
    }

  }

  ngModelSet(option: string, data?: any): void {

    switch (option) {
      case 'getFiltroLista': {
        this.ngClean('iFiltro');
        break;
      }
      case 'getFiltroTotal': {
        this.ngClean('iFiltro');
        this.iFiltro.filtro = this.filter;
        this.iFiltro.filtroColumna = this.column;
        this.iFiltro.filtroValor = this.value;
        break;
      }
      case 'getFiltroVista': {
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
      case 'getFiltroExportar': {
        this.ngClean('iFiltro');
        this.iFiltro.ordenColumna = this.active;
        this.iFiltro.ordenValor = this.direction;
        this.iFiltro.filtro = this.filter;
        this.iFiltro.filtroColumna = this.column;
        this.iFiltro.filtroValor = this.value;
        this.iFiltro.formato = this.shared.extension;
        break;
      }
      case 'deleteUsuario': {
        this.ngClean('inUsuario');
        this.inUsuario = this.selection.selected.map(v => ({ id: v.idUsuario, usuario: v.usuario, contrasena: v.contrasena, nombre: '', apellidoPaterno: '', apellidoMaterno: '', nombreCompleto: v.nombreCompleto, cambiaContrasena: false, idRol: v.idRol, idOrganizacion: v.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: !v.activo }));
        break;
      }
    }
  }

  ngModelGet(option: string, data?: any): void {

    switch (option) {
      case 'getFiltroLista': {
        this.ngClean('inFiltroLista');
        const model: IFiltroLista[] = data as IFiltroLista[];
        this.inFiltroLista = model;
        break;
      }
      case 'getFiltroTotal': {
        this.ngClean('inFiltroTotal');
        const model: IFiltroTotal[] = data as IFiltroTotal[];
        this.inFiltroTotal = model;
        break;
      }
      case 'getFiltroVista': {
        this.ngClean('inFiltroVista');
        const model: IUsuarioVista[] = data as IUsuarioVista[];
        this.inFiltroVista = model;
        this.ngHandleSource();
        break;
      }
      case 'getFiltroExportar': {
        const blob = new Blob([data], { type: (this.shared.extension == '.csv' ? 'text/csv;charset=utf-8' : 'application/vnd.ms-excel') });
        saveAs(blob, 'Usuarios' + '_' + this.shared.ngExportDate() + this.shared.extension);
        break;
      }
      case 'deleteUsuario': {

        break;
      }
    }
  }

  ngHandle(option: string, data?: any): void {

    switch (option) {
      case 'getFiltroLista': {
        this.ngController('getFiltroLista');
        break;
      }
      case 'getFiltroTotal': {
        this.ngController('getFiltroTotal');
        break;
      }
      case 'getFiltroVista': {
        this.ngController('getFiltroVista');
        break;
      }
      case 'getFiltroExportar': {
        this.ngController('getFiltroExportar');
        break;
      }
      case 'deleteUsuario': {
        this.ngController('deleteUsuario');
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

  ngController(option: string, data?: any): void {

    switch (option) {
      case 'getFiltroLista': {
        this.ngModelSet('getFiltroLista');
        this.ngGetFiltroLista(this.iFiltro);
        break;
      }
      case 'getFiltroTotal': {
        this.ngModelSet('getFiltroTotal');
        this.ngGetFiltroTotal(this.iFiltro);
        break;
      }
      case 'getFiltroVista': {
        this.ngModelSet('getFiltroVista');
        this.ngGetFiltroVista(this.iFiltro);
        break;
      }
      case 'getFiltroExportar': {
        this.ngModelSet('getFiltroExportar');
        this.ngGetFiltroExportar(this.iFiltro);
        break;
      }
      case 'deleteUsuario': {
        this.ngModelSet('deleteUsuario');
        this.ngDeleteUsuario(1, this.inUsuario);
        break;
      }
    }

  }

  ngDialogUsuario(option: string, model?: IUsuarioView): void {

    switch (option) {
      case 'post': {
        this.ngClean('iUsuario');
        break;
      }
      case 'put': {
        this.ngClean('iUsuario');
        this.iUsuario.id = model.idUsuario;
        this.iUsuario.usuario = model.usuario;
        this.iUsuario.contrasena = model.contrasena;
        this.iUsuario.nombre = model.nombre;
        this.iUsuario.apellidoPaterno = model.apellidoPaterno;
        this.iUsuario.apellidoMaterno = model.apellidoMaterno;
        this.iUsuario.idRol = model.idRol;
        break;
      }
    }

    this.dialog.open(DialogUserComponent, {
      panelClass: ['w100', 'h100'],
      autoFocus: false,
      data: { model: this.iUsuario }
    }).beforeClosed().subscribe(
      (r: boolean) => {

        if (r) {
          this.ngHandle('getFiltroLista');
        }

      });

  }

  async ngGetFiltroLista(model: IFiltro) {

    await this.service.ngGetUsuarioLista(model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getFiltroLista', r.data);
          this.ngHandle('getFiltroTotal');
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

    await this.service.ngGetUsuarioTotal(model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getFiltroTotal', r.data);
          this.ngHandle('getFiltroVista');
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

    await this.service.ngGetUsuarioVista(model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getFiltroVista', r.data);
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

    await this.service.ngGetUsuarioExportar(model)
      .then((r) => {

        this.ngModelGet('getFiltroExportar', r);

      }).catch(
        (e: any) => {
          console.error(e);
          this.message.dialogMessage(e['message']);
        }
      ).finally(() => { });

  }

  async ngDeleteUsuario(option: number, model: IUsuario[]) {

    await this.service.ngDeleteUsuario(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngHandle('deleteUsuario');
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
    this.ds = new MatTableDataSource<IUsuarioVista>(this.inFiltroVista);
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
        this.column += 'Usuario'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        this.filter += '1'.concat('|');
        this.column += 'NombreCompleto'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        this.filter += '1'.concat('|');
        this.column += 'Rol'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        this.filter += '1'.concat('|');
        this.column += 'Fecha'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        this.filter += '1'.concat('|');
        this.column += 'Hora'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        this.filter += '1'.concat('|');
        this.column += 'User'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        this.filter += '1'.concat('|');
        this.column += 'NombreUsuario'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        break;
      }
      case 'selection': {

        if (this.usuario) {
          this.filter += '2'.concat('|');
          this.column += 'Usuario'.concat('|');
          this.value += this.ngHandleSanitize(this.usuario).concat('|');
        }

        if (this.nombreCompleto) {
          this.filter += '2'.concat('|');
          this.column += 'NombreCompleto'.concat('|');
          this.value += this.ngHandleSanitize(this.nombreCompleto).concat('|');
        }

        if (this.rol.length) {
          this.filter += '3'.concat('|');
          this.column += 'Rol'.concat('|');
          this.value += this.rol.join(',').concat('|');
        }

        if (this.fecha.length) {
          this.filter += '3'.concat('|');
          this.column += 'Fecha'.concat('|');
          this.value += this.fecha.join(',').concat('|');
        }

        if (this.hora) {
          this.filter += '2'.concat('|');
          this.column += 'Hora'.concat('|');
          this.value += this.ngHandleSanitize(this.hora).concat('|');
        }

        if (this.user.length) {
          this.filter += '3'.concat('|');
          this.column += 'User'.concat('|');
          this.value += this.user.join(',').concat('|');
        }

        if (this.nombreUsuario.length) {
          this.filter += '3'.concat('|');
          this.column += 'NombreUsuario'.concat('|');
          this.value += this.nombreUsuario.join(',').concat('|');
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
        this.ngHandle('getFiltroLista');
        break;
      }
      case 'selection': {
        this.ngHandle('getFiltroLista');
        break;
      }
    }

  }

}
