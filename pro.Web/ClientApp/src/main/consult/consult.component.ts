import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { saveAs } from 'file-saver';
import { IAgenda, IAgendaVista, IFiltro, IFiltroLista, IFiltroTotal, ILlegada, IPago, IResponse } from '../../interface/interface-pro.interface';
import { Message } from '../../message/message';
import { ServiceProService } from '../../service/service-pro.service';
import { Shared } from '../../shared/shared';
import { DialogConsultComponent } from '../dialog-consult/dialog-consult.component';
import { DialogArriveComponent } from '../dialog-arrive/dialog-arrive.component';
import { DialogPaymentComponent } from '../dialog-payment/dialog-payment.component';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css']
})
export class ConsultComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  iFiltro: IFiltro;
  inFiltroLista: IFiltroLista[] = [];
  inFiltroTotal: IFiltroTotal[] = [];
  inFiltroVista: IAgendaVista[] = [];

  length: number = 0;
  pageIndex: number = 1;
  pageSize: number = 100;
  pageSizeOptions: number[] = [100, 250, 500, 1000];

  active: string = '';
  direction: string = '';

  filter: string = '';
  column: string = '';
  value: string = '';

  ds = new MatTableDataSource<IAgendaVista>();
  fl: string[] = ['editar-fl', 'paciente-fl', 'nombreCompleto-fl', 'comentario-fl', 'fechaInicio-fl', 'horaInicio-fl', 'fechaFin-fl', 'horaFin-fl', 'fecha-fl', 'hora-fl', 'usuario-fl', 'nombreUsuario-fl', 'activo-fl'];
  dc: string[] = ['editar', 'paciente', 'nombreCompleto', 'comentario', 'fechaInicio', 'horaInicio', 'fechaFin', 'horaFin', 'fecha', 'hora', 'usuario', 'nombreUsuario', 'activo'];
  search: string = '';
  selection = new SelectionModel<IAgendaVista>(true, []);

  paciente: string = '';
  nombreCompleto: string = '';
  comentario: string = '';
  fechaInicio: string[] = [];;
  horaInicio: string = '';
  fechaFin: string[] = [];
  horaFin: string = '';
  fecha: string[] = [];
  hora: string = '';
  usuario: string[] = [];
  nombreUsuario: string[] = [];
  activo: string[] = [];

  iAgenda: IAgenda;
  inAgenda: IAgenda[] = [];

  iLlegada: ILlegada;
  inLlegada: ILlegada[] = [];

  iPago: IPago;
  inPago: IPago[] = [];

  constructor(private cdr: ChangeDetectorRef, public shared: Shared, public message: Message, public dialog: MatDialog, public service: ServiceProService) { }

  ngOnInit(): void {
    this.shared.ngResetPicker();
    this.ngHandle('getFiltroLista');
  }

  ngAfterViewInit(): void { }

  ngClean(option: string, data?: any): void {

    switch (option) {
      case 'iFiltro': {
        this.iFiltro = { idOrganizacion: this.shared.idOrganizacion, idRol: 0, idMenu: 0, fechaInicio: this.shared.ngDateISO(new Date(this.shared.fechaInicio)), fechaFin: this.shared.ngDateISO(new Date(this.shared.fechaFin)), registros: this.pageSize, pagina: this.pageIndex, ordenColumna: '', ordenValor: '', filtro: '', filtroColumna: '', filtroValor: '', formato: '' };
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
        this.selection = new SelectionModel<IAgendaVista>(true, []);
        break;
      }
      case 'header': {
        this.paciente = '';
        this.nombreCompleto = '';
        this.comentario = '';
        this.fechaInicio = [];
        this.horaInicio = '';
        this.fechaFin = [];
        this.horaFin = '';
        this.fecha = [];
        this.hora = '';
        this.usuario = [];
        this.nombreUsuario = [];
        this.activo = [];
        break;
      }
      case 'iAgenda': {
        this.iAgenda = { id: 0, idPaciente: 0, idEquipo: 0, comentario: '', fechaAgenda: '', fechaInicio: '', fechaFin: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inAgenda': {
        this.inAgenda = [];
        break;
      }
      case 'iLlegada': {
        this.iLlegada = { id: 0, idAgenda: 0, idPaciente: 0, fechaLlegada: '', horaLlegada: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inLlegada': {
        this.inLlegada = [];
        break;
      }
      case 'iPago': {
        this.iPago = { id: 0, idAgenda: 0, idPaciente: 0, idFormaPago: 0, importe: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inPago': {
        this.inPago = [];
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
      case 'getLlegada': {
        this.ngClean('iLlegada');
        const model: IAgendaVista = data as IAgendaVista;
        this.iLlegada.idAgenda = model.idAgenda;
        this.iLlegada.idPaciente = model.idPaciente;
        break;
      }
      case 'getPago': {
        this.ngClean('iPago');
        const model: IAgendaVista = data as IAgendaVista;
        this.iPago.idAgenda = model.idAgenda;
        this.iPago.idPaciente = model.idPaciente;
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
        const model: IAgendaVista[] = data as IAgendaVista[];
        this.inFiltroVista = model;
        this.ngHandleSource();
        break;
      }
      case 'getFiltroExportar': {
        const blob = new Blob([data], { type: (this.shared.extension == '.csv' ? 'text/csv;charset=utf-8' : 'application/vnd.ms-excel') });
        saveAs(blob, 'Consulta' + '_' + this.shared.ngExportDate() + this.shared.extension);
        break;
      }
      case 'getLlegada': {
        this.ngClean('inLlegada');
        const model: ILlegada[] = data as ILlegada[];
        this.inLlegada = model;
        this.ngHandle('dialog');
        break;
      }
      case 'getPago': {
        this.ngClean('inPago');
        const model: IPago[] = data as IPago[];
        this.inPago = model;
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
      case 'getLlegada': {
        this.ngController('getLlegada', data);
        break;
      }
      case 'getPago': {
        this.ngController('getPago', data);
        break;
      }
      case 'dialog': {

        if (this.inLlegada.length == 0) {
          this.ngDialogLlegada(this.inLlegada);
        }
        else {
          this.ngDialogConsulta();
        }

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
      case 'getLlegada': {
        this.ngModelSet('getLlegada', data);
        this.ngGetLlegada(2, this.iLlegada);
        break;
      }
      case 'getPago': {
        this.ngModelSet('getPago', data);
        this.ngGetPago(2, this.iPago);
        break;
      }
    }

  }

  ngDialogLlegada(model: ILlegada[]): void {

    if (model.length >= 1) {
      this.ngClean('iLlegada');
      this.iLlegada = this.inLlegada[0];
    }

    this.dialog.open(DialogArriveComponent, {
      panelClass: ['w100', 'h100'],
      autoFocus: false,
      data: { iLlegada: this.iLlegada }
    }).beforeClosed().subscribe(
      (r: boolean) => {

        if (r) {
          this.ngHandle('getFiltroLista');
        }

      });

  }

  ngDialogConsulta(): void {

    this.ngClean('iAgenda');
    this.iAgenda.id = this.iLlegada.idAgenda;
    this.iAgenda.idPaciente = this.iLlegada.idPaciente;

    if (this.inLlegada.length >= 1) {
      this.ngClean('iLlegada');
      this.iLlegada = this.inLlegada[0];
    }

    this.dialog.open(DialogConsultComponent, {
      panelClass: ['w100', 'h100'],
      autoFocus: false,
      data: { iAgenda: this.iAgenda, iLlegada: this.iLlegada }
    }).beforeClosed().subscribe(
      (r: boolean) => {

        if (r) {
          this.ngHandle('getFiltroLista');
        }

      });

  }

  ngDialogPago(model: IAgendaVista): void {
    this.ngModelSet('dialog', model);

    this.dialog.open(DialogPaymentComponent, {
      panelClass: ['w100', 'h100'],
      autoFocus: false,
      data: { model: this.iAgenda }
    }).beforeClosed().subscribe(
      (r: boolean) => {

        if (r) {
          this.ngHandle('getFiltroLista');
        }

      });

  }

  async ngGetFiltroLista(model: IFiltro) {

    await this.service.ngGetAgendaLista(model)
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

    await this.service.ngGetAgendaTotal(model)
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

    await this.service.ngGetAgendaVista(model)
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

    await this.service.ngGetAgendaExportar(model)
      .then((r) => {

        this.ngModelGet('getFiltroExportar', r);

      }).catch(
        (e: any) => {
          console.error(e);
          this.message.dialogMessage(e['message']);
        }
      ).finally(() => { });

  }

  async ngGetLlegada(option: number, model: ILlegada) {

    await this.service.ngGetLlegada(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getLlegada', r.data);
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

  async ngGetPago(option: number, model: IPago) {

    await this.service.ngGetPago(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getPago', r.data);
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
    this.ds = new MatTableDataSource<IAgendaVista>(this.inFiltroVista);
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
        this.column += 'Paciente'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        this.filter += '1'.concat('|');
        this.column += 'NombreCompleto'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        this.filter += '1'.concat('|');
        this.column += 'Comentario'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        this.filter += '1'.concat('|');
        this.column += 'FechaInicio'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        this.filter += '1'.concat('|');
        this.column += 'HoraInicio'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        this.filter += '1'.concat('|');
        this.column += 'FechaFin'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        this.filter += '1'.concat('|');
        this.column += 'HoraFin'.concat('|');
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

        if (this.paciente) {
          this.filter += '2'.concat('|');
          this.column += 'Paciente'.concat('|');
          this.value += this.ngHandleSanitize(this.paciente).concat('|');
        }

        if (this.nombreCompleto) {
          this.filter += '2'.concat('|');
          this.column += 'NombreCompleto'.concat('|');
          this.value += this.ngHandleSanitize(this.nombreCompleto).concat('|');
        }

        if (this.comentario) {
          this.filter += '2'.concat('|');
          this.column += 'Comentario'.concat('|');
          this.value += this.ngHandleSanitize(this.comentario).concat('|');
        }

        if (this.fechaInicio.length) {
          this.filter += '3'.concat('|');
          this.column += 'FechaInicio'.concat('|');
          this.value += this.fechaInicio.join(',').concat('|');
        }

        if (this.horaInicio) {
          this.filter += '2'.concat('|');
          this.column += 'HoraInicio'.concat('|');
          this.value += this.ngHandleSanitize(this.horaInicio).concat('|');
        }

        if (this.fechaFin.length) {
          this.filter += '3'.concat('|');
          this.column += 'FechaFin'.concat('|');
          this.value += this.fechaFin.join(',').concat('|');
        }

        if (this.horaFin) {
          this.filter += '2'.concat('|');
          this.column += 'HoraFin'.concat('|');
          this.value += this.ngHandleSanitize(this.horaFin).concat('|');
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
