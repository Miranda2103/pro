import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { saveAs } from 'file-saver';
import { IFiltro, IFiltroLista, IFiltroTotal, IOrganizacion, IOrganizacionVista, IResponse } from '../../interface/interface-pro.interface';
import { Message } from '../../message/message';
import { ServiceProService } from '../../service/service-pro.service';
import { Shared } from '../../shared/shared';
import { DialogOrganizationComponent } from '../dialog-organization/dialog-organization.component';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  iFiltro: IFiltro;
  inFiltroLista: IFiltroLista[] = [];
  inFiltroTotal: IFiltroTotal[] = [];
  inFiltroVista: IOrganizacionVista[] = [];

  length: number = 0;
  pageIndex: number = 1;
  pageSize: number = 100;
  pageSizeOptions: number[] = [100, 250, 500, 1000];

  active: string = '';
  direction: string = '';

  filter: string = '';
  column: string = '';
  value: string = '';

  ds = new MatTableDataSource<IOrganizacionVista>();
  fl: string[] = ['editar-fl', 'organizacion-fl', 'nombreCompleto-fl', 'telefono-fl', 'correo-fl', 'fecha-fl', 'hora-fl', 'usuario-fl', 'nombreUsuario-fl', 'activo-fl'];
  dc: string[] = ['editar', 'organizacion', 'nombreCompleto', 'telefono', 'correo', 'fecha', 'hora', 'usuario', 'nombreUsuario', 'activo'];
  search: string = '';
  selection = new SelectionModel<IOrganizacionVista>(true, []);

  organizacion: string = '';
  nombreCompleto: string = '';
  telefono: string = '';
  correo: string = '';
  fecha: string[] = [];
  hora: string = '';
  usuario: string[] = [];
  nombreUsuario: string[] = [];
  activo: string[] = [];

  iOrganizacion: IOrganizacion;
  inOrganizacion: IOrganizacion[] = [];

  constructor(private cdr: ChangeDetectorRef, public shared: Shared, public message: Message, public dialog: MatDialog, public service: ServiceProService) {
  }

  ngOnInit(): void {
    this.ngHandle('getFiltroLista');
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
        this.selection = new SelectionModel<IOrganizacionVista>(true, []);
        break;
      }
      case 'header': {
        this.organizacion = '';
        this.nombreCompleto = '';
        this.telefono = '';
        this.correo = '';
        this.fecha = [];
        this.hora = '';
        this.usuario = [];
        this.nombreUsuario = [];
        this.activo = [];
        break;
      }
      case 'iOrganizacion': {
        this.iOrganizacion = { id: 0, organizacion: '', nombre: '', apellidoPaterno: '', apellidoMaterno: '', nombreCompleto: '', telefono: '', correo: '', calle: '', numeroExterior: '', numeroInterior: '', colonia: '', municipio: '', estado: '', idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inOrganizacion': {
        this.inOrganizacion = [];
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
      case 'deleteOrganizacion': {
        this.ngClean('inOrganizacion');
        this.inOrganizacion = this.selection.selected.map(v => ({ id: v.idOrganizacion, organizacion: v.organizacion, nombre: v.nombre, apellidoPaterno: v.apellidoPaterno, apellidoMaterno: v.apellidoMaterno, nombreCompleto: v.nombreCompleto, telefono: v.telefono, correo: v.correo, calle: v.calle, numeroExterior: v.numeroExterior, numeroInterior: v.numeroInterior, colonia: v.colonia, municipio: v.municipio, estado: v.estado, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaDefault(), activo: !v.activo, estatus: true }));
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
        const model: IOrganizacionVista[] = data as IOrganizacionVista[];
        this.inFiltroVista = model;
        this.ngHandleSource();
        break;
      }
      case 'getFiltroExportar': {
        const blob = new Blob([data], { type: (this.shared.extension == '.csv' ? 'text/csv;charset=utf-8' : 'application/vnd.ms-excel') });
        saveAs(blob, 'Organizacions' + '_' + this.shared.ngExportDate() + this.shared.extension);
        break;
      }
      case 'deleteOrganizacion': {

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
      case 'deleteOrganizacion': {
        this.ngController('deleteOrganizacion');
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
      case 'deleteOrganizacion': {
        this.ngModelSet('deleteOrganizacion');
        this.ngDeleteOrganizacion(1, this.inOrganizacion);
        break;
      }

    }

  }

  ngDialogOrganizacion(option: string, model?: IOrganizacionVista): void {

    switch (option) {
      case 'post': {
        this.ngClean('iOrganizacion');
        break;
      }
      case 'put': {
        this.ngClean('iOrganizacion');
        this.iOrganizacion.id = model.idOrganizacion;
        this.iOrganizacion.organizacion = model.organizacion;
        this.iOrganizacion.nombre = model.nombre;
        this.iOrganizacion.apellidoPaterno = model.apellidoPaterno;
        this.iOrganizacion.apellidoMaterno = model.apellidoMaterno;
        this.iOrganizacion.nombreCompleto = model.nombreCompleto;
        this.iOrganizacion.telefono = model.telefono;
        this.iOrganizacion.correo = model.correo;
        this.iOrganizacion.calle = model.calle;
        this.iOrganizacion.numeroExterior = model.numeroExterior;
        this.iOrganizacion.numeroInterior = model.numeroInterior;
        this.iOrganizacion.colonia = model.colonia;
        this.iOrganizacion.municipio = model.municipio;
        this.iOrganizacion.estado = model.estado;
        break;
      }
    }

    this.dialog.open(DialogOrganizationComponent, {
      panelClass: ['w100', 'h100'],
      autoFocus: false,
      data: { model: this.iOrganizacion }
    }).beforeClosed().subscribe(
      (r: boolean) => {

        if (r) {
          this.ngHandle('getFiltroLista');
        }

      });

  }

  async ngGetFiltroLista(model: IFiltro) {

    await this.service.ngGetOrganizacionLista(model)
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

    await this.service.ngGetOrganizacionTotal(model)
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

    await this.service.ngGetOrganizacionVista(model)
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

    await this.service.ngGetOrganizacionExportar(model)
      .then((r) => {

        this.ngModelGet('iFiltroExportar', r);

      }).catch(
        (e: any) => {
          console.error(e);
          this.message.dialogMessage(e['message']);
        }
      ).finally(() => { });

  }

  async ngDeleteOrganizacion(option: number, model: IOrganizacion[]) {

    await this.service.ngDeleteOrganizacion(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngHandle('getFiltroLista');
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
    this.ds = new MatTableDataSource<IOrganizacionVista>(this.inFiltroVista);
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
        this.column += 'Organizacion'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        this.filter += '1'.concat('|');
        this.column += 'NombreCompleto:'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        this.filter += '1'.concat('|');
        this.column += 'Telefono:'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        this.filter += '1'.concat('|');
        this.column += 'Correo:'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        this.filter += '1'.concat('|');
        this.column += 'Fecha'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        this.filter += '1'.concat('|');
        this.column += 'Hora'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        this.filter += '1'.concat('|');
        this.column += 'Usuario'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        this.filter += '1'.concat('|');
        this.column += 'NombreUsuario'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        break;
      }
      case 'selection': {

        if (this.organizacion) {
          this.filter += '2'.concat('|');
          this.column += 'Organizacion'.concat('|');
          this.value += this.ngHandleSanitize(this.organizacion).concat('|');
        }

        if (this.nombreCompleto) {
          this.filter += '2'.concat('|');
          this.column += 'NombreCompleto'.concat('|');
          this.value += this.ngHandleSanitize(this.nombreCompleto).concat('|');
        }

        if (this.telefono) {
          this.filter += '2'.concat('|');
          this.column += 'Telefono'.concat('|');
          this.value += this.ngHandleSanitize(this.telefono).concat('|');
        }

        if (this.correo) {
          this.filter += '2'.concat('|');
          this.column += 'Correo'.concat('|');
          this.value += this.ngHandleSanitize(this.correo).concat('|');
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

        if (this.usuario.length) {
          this.filter += '3'.concat('|');
          this.column += 'Usuario'.concat('|');
          this.value += this.usuario.join(',').concat('|');
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
