import { BehaviorSubject } from "rxjs";
import { v4 as uuidv4 } from 'uuid';
import { IExtensionDescarga, IRolMenuView, IRolSubMenuView } from "../interface/interface-pro.interface";

export class Shared {

  public complete: boolean = false;
  public rd: boolean = false;
  public screen: number = 600;
  public expand: boolean = true;

  public load: boolean = false;
  public loading: boolean = false;
  public isLoading = new BehaviorSubject(false);

  public idUsuarioSistema: number = 1;
  public version: string = '';

  public idOrganizacion: number = 0;

  public idUsuario: number = 0;
  public usuario: string = '';
  public nombreUsuario: string = '';
  public idRol: number = 0;
  public cambiaContrasena: boolean = false;

  public extension: string = '.csv';
  public format: string = '.xlsx';

  public fechaHoy: Date = new Date();

  public fechaInicio: Date = new Date();
  public fechaFin: Date = new Date();

  public fechaInicioMax: Date = new Date();
  public fechaFinMax: Date = new Date();

  public fechaInicioMin: Date = new Date();
  public fechaFinMin: Date = new Date();

  public fechaMin: Date = new Date(2024, 0, 1, 0, 0, 0);

  public inRolMenuView: IRolMenuView[] = [];
  public inRolSubMenuView: IRolSubMenuView[] = [];

  public inExtensionDescarga: IExtensionDescarga[] = [];

  public error: string = 'Ha ocurrido un error al intentar ejecutar la solicitud, informe al administrador.' + '<br/><br/ > ' + 'Error: ';

  public message: any = [];

  constructor() {
    this.ngDatePicker();
    this.ngExtensionDescarga();
  }

  ngFechaInserta() {
    return new Date(new Date().setHours(new Date().getHours() - 6)).toISOString();
  }

  ngFechaActualiza() {
    return new Date(new Date().setHours(new Date().getHours() - 6)).toISOString();
  }

  ngFechaDefault() {
    return '1900-01-01T00:00:00';
  }

  ngError(e: any) {
    return this.error + (e['error'] == null ? e['message'] : (e['error']['message'] == null ? e['error']['title'] : e['error']['message']));
  }

  ngFalse() {
    return this.error + 'False';
  }

  ngFilterObject(model: any, key: string) {
    const uniq = [];
    let uniqOrder = [];
    let type: string = '';

    model.filter(obj => {

      if (!uniq.includes(obj[key])) {
        uniq.push(obj[key]);
        type = typeof obj[key];
      }

      return obj;
    });

    if (type == 'number') {
      uniqOrder = uniq.sort((n1, n2) => n1 - n2);
    } else if (key.includes('fecha') && !key.includes('fechaDesembolso') && !key.includes('fechaPromesa')) {

      let dates: any[] = [];

      for (let date of uniq) {

        if (date != '') {
          let dateArr = date.split('/');

          let year = parseFloat(dateArr[2]);
          let month = parseFloat(dateArr[1]) - 1;
          let day = parseFloat(dateArr[0]);

          let dateItem = new Date(year, month, day);

          dates.push(dateItem);
        }

      }

      const d = dates.sort((a, b) => a - b);

      d.forEach((v, i) => {

        let dateArr = v.toJSON().slice(0, 10).split('-');

        let year = parseFloat(dateArr[0]);
        let month = parseFloat(dateArr[1]);
        let day = parseFloat(dateArr[2]);

        let dateItem = (day.toString().length == 1 ? '0' + day : day) + '/' + (month.toString().length == 1 ? '0' + month : month) + '/' + year;

        uniqOrder.push(dateItem);
      });

    } else if (type == 'string') {

      uniqOrder = uniq.sort((n1, n2) => {

        if (n1 > n2) {
          return 1;
        }

        if (n1 < n2) {
          return -1;
        }

        return 0;
      });

    }
    else if (type == 'boolean') {

      let data: any[] = [];

      for (let item of uniq) {

        if (item == true) {
          data.push('Activo');
        } else {
          data.push('Inactivo');
        }

      }

      uniqOrder = data.sort((n1, n2) => {

        if (n1 > n2) {
          return 1;
        }

        if (n1 < n2) {
          return -1;
        }

        return 0;
      });

    }
    else {
      uniqOrder = uniq;
    }

    return uniqOrder;

  }

  ngExportDate() {
    let d = new Date();
    return ('0' + d.getDate()).slice(-2).toString() + ('0' + (d.getMonth() + 1)).slice(-2).toString() + d.getFullYear().toString() + '_' + d.getHours().toString() + d.getMinutes().toString() + d.getSeconds().toString();
  }

  ngNumber(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }

    return true;
  }

  ngEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  ngUUID(): string {
    return uuidv4();
  }

  ngUser(user: string): string {
    const randomNumber = Math.floor(Math.random() * 10000);
    return `${user}${randomNumber}`;
  }

  ngPassword(): string {
    return Math.random().toString(36).slice(-8);
  }

  ngDatePicker() {

    let day: number = this.fechaInicio.getDate();
    let month: number = this.fechaInicio.getMonth();
    let year: number = this.fechaInicio.getFullYear();

    let date: string = year + '-' + (month + 1) + '-' + day;

    let d: Date = new Date(date);
    let dateEnd: Date = new Date(d.setMonth(d.getMonth() + 1));
    let dateToday: Date = new Date();

    if (dateEnd > dateToday) {
      dateEnd = dateToday;
    }

    let diff: number = Math.abs(this.fechaInicio.getTime() - this.fechaFin.getTime());
    let diffDays: number = Math.ceil(diff / (1000 * 3600 * 24));

    if (diffDays > 30) {
      this.fechaFin = new Date(dateEnd);
    }

    this.fechaFinMin = this.fechaInicio;
    this.fechaFinMax = new Date(dateEnd);

  }

  ngResetPicker() {
    this.fechaInicio = new Date();
    this.fechaFin = new Date();

    this.fechaInicioMax = new Date();
    this.fechaFinMax = new Date();

    this.fechaInicioMin = new Date();
    this.fechaFinMin = new Date();
  }

  ngDateFormat(fecha: Date) {
    return (fecha.getFullYear() + '-' + (fecha.getMonth() + 1) + '-' + fecha.getDate());
  }

  ngDateISO(fecha: Date) {
    return new Date(fecha.getFullYear() + '-' + (fecha.getMonth() + 1) + '-' + fecha.getDate()).toISOString();
  }

  ngExtensionDescarga() {
    this.inExtensionDescarga.push({ id: 1, extension: '.csv' }, { id: 2, extension: '.xlsx' });
  }

  ngDateCurrent() {
    let d = new Date();
    return d.getFullYear().toString() + '-' + ('0' + (d.getMonth() + 1)).slice(-2).toString() + '-' + ('0' + d.getDate()).slice(-2).toString() + ' ' + ('0' + d.getHours()).slice(-2).toString() + ':' + ('0' + d.getMinutes()).slice(-2).toString() + ':' + ('0' + d.getSeconds()).slice(-2).toString();
  }

  ngDateAddDays(date: Date, days: number): Date {
    date.setDate(date.getDate() + days);
    return date;
  }

  ngDateRemoveDays(date: Date, days: number): Date {
    date.setDate(date.getDate() - days);
    return date;
  }

}
