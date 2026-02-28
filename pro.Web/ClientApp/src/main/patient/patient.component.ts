import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { saveAs } from 'file-saver';
import { IFiltro, IFiltroLista, IFiltroTotal, IResponse, IPaciente, IPacienteVista } from '../../interface/interface-pro.interface';
import { Message } from '../../message/message';
import { ServiceProService } from '../../service/service-pro.service';
import { Shared } from '../../shared/shared';
import { DialogPatientComponent } from '../dialog-patient/dialog-patient.component';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  iFiltro: IFiltro;
  inFiltroLista: IFiltroLista[] = [];
  inFiltroTotal: IFiltroTotal[] = [];
  inFiltroVista: IPacienteVista[] = [];

  length: number = 0;
  pageIndex: number = 1;
  pageSize: number = 100;
  pageSizeOptions: number[] = [100, 250, 500, 1000];

  active: string = '';
  direction: string = '';

  filter: string = '';
  column: string = '';
  value: string = '';

  ds = new MatTableDataSource<IPacienteVista>();
  fl: string[] = ['editar-fl', 'paciente-fl', 'nombreCompleto-fl', 'fechaNacimiento-fl', 'telefonoMovil-fl', 'telefonoCasa-fl', 'correo-fl', 'fecha-fl', 'hora-fl', 'usuario-fl', 'nombreUsuario-fl', 'activo-fl'];
  dc: string[] = ['editar', 'paciente', 'nombreCompleto', 'fechaNacimiento', 'telefonoMovil', 'telefonoCasa', 'correo', 'fecha', 'hora', 'usuario', 'nombreUsuario', 'activo'];
  search: string = '';
  selection = new SelectionModel<IPacienteVista>(true, []);

  paciente: string = '';
  nombreCompleto: string = '';
  fechaNacimiento: string = '';
  telefonoMovil: string = '';
  telefonoCasa: string = '';
  correo: string = '';
  fecha: string[] = [];
  hora: string = '';
  usuario: string[] = [];
  nombreUsuario: string[] = [];
  activo: string[] = [];

  iPaciente: IPaciente;
  inPaciente: IPaciente[] = [];

  constructor(private cdr: ChangeDetectorRef, public shared: Shared, public message: Message, public dialog: MatDialog, public service: ServiceProService) { }

  ngOnInit(): void {
    this.ngController('getFiltroLista');
  }

  ngAfterViewInit(): void { }

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
        this.selection = new SelectionModel<IPacienteVista>(true, []);
        break;
      }
      case 'header': {
        this.paciente = '';
        this.nombreCompleto = '';
        this.fechaNacimiento = '';
        this.telefonoMovil = '';
        this.telefonoCasa = '';
        this.correo = '';
        this.fecha = [];
        this.hora = '';
        this.usuario = [];
        this.nombreUsuario = [];
        this.activo = [];
        break;
      }
      case 'iModel': {
        this.iPaciente = { id: 0, paciente: '', nombre: '', apellidoPaterno: '', apellidoMaterno: '', nombreCompleto: '', fechaNacimiento: '', edad: 0, idSexo: 0, idEstado: 0, idMunicipio: 0, idColonia: 0, codigoPostal: '', calle: '', numeroInterior: '', numeroExterior: '', telefonoMovil: '', telefonoCasa: '', correo: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inModel': {
        this.inPaciente = [];
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
      case 'postPaciente': {
        this.ngClean('iModel');
        break;
      }
      case 'putPaciente': {
        this.ngClean('iModel');
        const model: IPacienteVista = data as IPacienteVista;
        this.iPaciente.id = model.idPaciente;
        this.iPaciente.paciente = model.paciente;
        this.iPaciente.nombre = model.nombre;
        this.iPaciente.apellidoPaterno = model.apellidoPaterno;
        this.iPaciente.apellidoMaterno = model.apellidoMaterno;
        this.iPaciente.fechaNacimiento = model.fechaNacimiento;
        this.iPaciente.edad = model.edad;
        this.iPaciente.idSexo = model.idSexo;
        this.iPaciente.idEstado = model.idEstado;
        this.iPaciente.idMunicipio = model.idMunicipio;
        this.iPaciente.idColonia = model.idColonia;
        this.iPaciente.codigoPostal = model.codigoPostal;
        this.iPaciente.calle = model.calle;
        this.iPaciente.numeroInterior = model.numeroInterior;
        this.iPaciente.numeroExterior = model.numeroExterior;
        this.iPaciente.telefonoMovil = model.telefonoMovil;
        this.iPaciente.telefonoCasa = model.telefonoCasa;
        this.iPaciente.correo = model.correo;
        break;
      }
      case 'deletePaciente': {
        this.ngClean('inModel');
        this.inPaciente = this.selection.selected.map(v => ({ id: v.idPaciente, paciente: v.paciente, nombre: '', apellidoPaterno: '', apellidoMaterno: '', nombreCompleto: '', fechaNacimiento: '', edad: 0, idSexo: 0, idEstado: 0, idMunicipio: 0, idColonia: 0, codigoPostal: '', calle: '', numeroInterior: '', numeroExterior: '', telefonoMovil: '', telefonoCasa: '', correo: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaDefault(), activo: !v.activo, estatus: true }));
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
        const model: IPacienteVista[] = data as IPacienteVista[];
        this.inFiltroVista = model;
        this.ngHandleSource();
        break;
      }
      case 'getFiltroExportar': {
        const blob = new Blob([data], { type: (this.shared.extension == '.csv' ? 'text/csv;charset=utf-8' : 'application/vnd.ms-excel') });
        saveAs(blob, 'Pacientes' + '_' + this.shared.ngExportDate() + this.shared.extension);
        break;
      }
      case 'deletePaciente': {

        break;
      }
    }
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
      case 'deletePaciente': {
        this.ngModelSet('deletePaciente');
        this.ngDeletePaciente(1, this.inPaciente);
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

  ngDialog(option: string, model?: IPacienteVista): void {

    switch (option) {
      case 'postPaciente': {
        this.ngModelSet('postPaciente');
        break;
      }
      case 'putPaciente': {
        this.ngModelSet('putPaciente', model);
        break;
      }
    }

    this.dialog.open(DialogPatientComponent, {
      panelClass: ['w100', 'h100'],
      autoFocus: false,
      data: { model: this.iPaciente }
    }).beforeClosed().subscribe(
      (r: boolean) => {

        if (r) {
          this.ngController('getFiltroLista');
        }

      });

  }

  async ngGetFiltroLista(model: IFiltro) {

    await this.service.ngGetPacienteLista(model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getFiltroLista', r.data);
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

    await this.service.ngGetPacienteTotal(model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getFiltroTotal', r.data);
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

    await this.service.ngGetPacienteVista(model)
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

    await this.service.ngGetPacienteExportar(model)
      .then((r) => {

        this.ngModelGet('getFiltroExportar', r);

      }).catch(
        (e: any) => {
          console.error(e);
          this.message.dialogMessage(e['message']);
        }
      ).finally(() => { });

  }

  async ngDeletePaciente(option: number, model: IPaciente[]) {

    await this.service.ngDeletePaciente(option, model)
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
    this.ds = new MatTableDataSource<IPacienteVista>(this.inFiltroVista);
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
        this.column += 'FechaNacimiento'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        this.filter += '1'.concat('|');
        this.column += 'TelefonoMovil'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        this.filter += '1'.concat('|');
        this.column += 'TelefonoCasa'.concat('|');
        this.value += this.ngHandleSanitize(this.search).concat('|');

        this.filter += '1'.concat('|');
        this.column += 'Correo'.concat('|');
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

        if (this.fechaNacimiento) {
          this.filter += '2'.concat('|');
          this.column += 'FechaNacimiento'.concat('|');
          this.value += this.ngHandleSanitize(this.fechaNacimiento).concat('|');
        }

        if (this.telefonoMovil) {
          this.filter += '2'.concat('|');
          this.column += 'TelefonoMovil'.concat('|');
          this.value += this.ngHandleSanitize(this.telefonoMovil).concat('|');
        }

        if (this.telefonoCasa) {
          this.filter += '2'.concat('|');
          this.column += 'TelefonoCasa'.concat('|');
          this.value += this.ngHandleSanitize(this.telefonoCasa).concat('|');
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
