import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { MatDialog } from '@angular/material/dialog';
import { Message } from '../../message/message';
import { ServiceProService } from '../../service/service-pro.service';
import { Shared } from '../../shared/shared';
import { IAgenda, IEquipo, IEquipoView, IPaciente, IResponse, ITipoConsulta } from '../../interface/interface-pro.interface';
import { FullCalendarComponent } from '@fullcalendar/angular';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  @ViewChild('calendarRef') calendarComponent: FullCalendarComponent;

  iPaciente: IPaciente;
  inPaciente: IPaciente[] = [];
  idPaciente: number = 0;
  filteredPaciente: IPaciente[] = [];

  iEquipo: IEquipo;
  inEquipo: IEquipo[] = [];
  idEquipo: number = 0;
  filteredEquipo: IEquipo[] = [];

  iTipoConsulta: ITipoConsulta;
  inTipoConsulta: ITipoConsulta[] = [];
  idTipoConsulta: number = 0;
  filteredTipoConsulta: ITipoConsulta[] = [];

  iEquipoView: IEquipoView;
  inEquipoView: IEquipoView[] = [];

  iAgenda: IAgenda;
  inAgenda: IAgenda[] = [];

  calendarApi: any;
  idAgenda: number = 0;
  comentario: string = '';
  fechaAgenda: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    dayCellClassNames: (arg) => {
      const today = new Date();
      const isToday = arg.date.getDate() === today.getDate() && arg.date.getMonth() === today.getMonth() && arg.date.getFullYear() === today.getFullYear();
      if (isToday) {
        return ['background-13'];
      }
      return [];
    },
    selectAllow: (selectInfo) => {
      const start = selectInfo.start;
      const end = selectInfo.end;
      const diffMs = end.getTime() - start.getTime();
      const diffHours = diffMs / (1000 * 60 * 60);

      if (this.idTipoConsulta == 1) {
        return diffHours == 4;
      } else {
        return true;
      }

    },
    events: [],
    headerToolbar: {
      left: 'prev,next today',
      center: '',
      right: 'timeGridDay,timeGridWeek,dayGridMonth'
    },
    allDaySlot: false,
    locale: esLocale,
    selectable: false,
    select: this.handleDateSelect.bind(this),
    editable: false,
    eventStartEditable: false,
    eventDurationEditable: false,
    droppable: false,
    eventClick: this.handleEventClick.bind(this),
    slotMinTime: '06:00:00',
    slotMaxTime: '22:00:00',
    eventContent: (arg) => {
      const start = arg.event.start;
      const end = arg.event.end;
      const startHour = start ? start.getHours() : '';
      const endHour = end ? end.getHours() : '';
      const text = `${startHour}:00 - ${endHour}:00 ${arg.event.title}`;
      const bgColor = arg.event.backgroundColor || '#1976d2';
      return { html: `<div style="white-space: normal; overflow: hidden; background-color:${bgColor}; color:white; padding:2px; border-radius:3px; word-wrap: break-word;">${text}</div>` };
    }

  };

  colorAgenda: { [key: number]: string } = {
    1: '#1976d2', //azul
    2: '#388e3c', //verde
    3: '#fbc02d', //amarillo
    4: '#d32f2f'  //rojo
  };


  constructor(private cdr: ChangeDetectorRef, public shared: Shared, public message: Message, public dialog: MatDialog, public service: ServiceProService) {
  }

  ngOnInit(): void {
    this.ngHandle('getPaciente');
    this.ngHandle('getEquipo');
    this.ngHandle('getTipoConsulta');
    this.ngHandle('getEquipoView');
    this.ngHandle('getAgenda');
  }

  ngAfterViewInit(): void {
  }

  ngClean(option: string, data?: any): void {

    switch (option) {
      case 'iPaciente': {
        this.iPaciente = { id: 0, paciente: '', nombre: '', apellidoPaterno: '', apellidoMaterno: '', nombreCompleto: '', fechaNacimiento: '', edad: 0, idSexo: 0, idEstado: 0, idMunicipio: 0, idColonia: 0, codigoPostal: '', calle: '', numeroInterior: '', numeroExterior: '', telefonoMovil: '', telefonoCasa: '', correo: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inPaciente': {
        this.inPaciente = [];
        this.filteredPaciente = [];
        break;
      }
      case 'iEquipo': {
        this.iEquipo = { id: 0, equipo: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inEquipo': {
        this.inEquipo = [];
        this.filteredEquipo = [];
        break;
      }
      case 'iTipoConsulta': {
        this.iTipoConsulta = { id: 0, tipoConsulta: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inTipoConsulta': {
        this.inTipoConsulta = [];
        this.filteredTipoConsulta = [];
        break;
      }
      case 'iEquipoView': {
        this.iEquipoView = { equipo: '', total: 0, idOrganizacion: this.shared.idOrganizacion,  activo: true };
        break;
      }
      case 'inEquipoView': {
        this.inEquipoView = [];
        break;
      }
      case 'iAgenda': {
        this.iAgenda = { id: 0, idPaciente: this.idPaciente, idEquipo: this.idEquipo, comentario: '', fechaAgenda: '', fechaInicio: '', fechaFin: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inAgenda': {
        this.inAgenda = [];
        break;
      }
      case 'agenda': {
        this.idAgenda = 0;
        this.comentario = '';
        this.fechaAgenda = '';
        this.fechaInicio = '';
        this.fechaFin = '';
        break;
      }
    }

  }

  ngModelSet(option: string, data?: any): void {

    switch (option) {
      case 'getPaciente': {
        this.ngClean('iPaciente');
        break;
      }
      case 'getEquipo': {
        this.ngClean('iEquipo');
        break;
      }
      case 'getTipoConsulta': {
        this.ngClean('iTipoConsulta');
        break;
      }
      case 'getEquipoView': {
        this.ngClean('iEquipoView');
        break;
      }
      case 'getAgenda': {
        this.ngClean('iAgenda');
        break;
      }
      case 'postAgenda': {
        this.ngClean('iAgenda');
        this.iAgenda.idPaciente = this.idPaciente;
        this.iAgenda.idEquipo = this.idEquipo;
        this.iAgenda.comentario = (this.inPaciente.find(r => r.id == this.idPaciente)?.nombreCompleto || '') + ' - ' + this.comentario;
        this.iAgenda.fechaAgenda = this.fechaAgenda;
        this.iAgenda.fechaInicio = this.fechaInicio;
        this.iAgenda.fechaFin = this.fechaFin;
        break;
      }
      case 'deleteAgenda': {
        this.ngClean('inAgenda');
        this.inAgenda.push({ id: this.idAgenda, idPaciente: this.idPaciente, idEquipo: this.idEquipo, comentario: this.comentario, fechaAgenda: this.fechaAgenda, fechaInicio: this.fechaInicio, fechaFin: this.fechaFin, idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: false });
        break;
      }
    }

  }

  ngModelGet(option: string, data?: any): void {

    switch (option) {
      case 'getPaciente': {
        this.ngClean('inPaciente');
        const model: IPaciente[] = data as IPaciente[];
        this.inPaciente = model;
        this.filteredPaciente = model;
        break;
      }
      case 'getEquipo': {
        this.ngClean('inEquipo');
        const model: IEquipo[] = data as IEquipo[];
        this.inEquipo = model;
        this.filteredEquipo = model;
        break;
      }
      case 'getTipoConsulta': {
        this.ngClean('inTipoConsulta');
        const model: ITipoConsulta[] = data as ITipoConsulta[];
        this.inTipoConsulta = model;
        this.filteredTipoConsulta = model;
        break;
      }
      case 'getEquipoView': {
        this.ngClean('inEquipoView');
        const model: IEquipoView[] = data as IEquipoView[];
        this.inEquipoView = model;
        break;
      }
      case 'getAgenda': {
        this.ngClean('inAgenda');
        const model: IAgenda[] = data as IAgenda[];
        this.inAgenda = model;
        this.ngEquipoCalendario();
        break;
      }
      case 'postAgenda': {
        this.ngClean('inAgenda');
        const model: IAgenda[] = data as IAgenda[];
        this.inAgenda = model;
        this.calendarApi.addEvent({ id: this.idEquipo, start: this.fechaInicio, end: this.fechaFin, title: (this.inPaciente.find(r => r.id == this.idPaciente)?.nombreCompleto || '') + ' - ' + this.comentario, backgroundColor: this.colorAgenda[this.idEquipo] || '#1976d2', extendedProps: { idAgenda: this.idAgenda } });
        break;
      }
      case 'deleteAgenda': {
        this.idAgenda = data;
        break;
      }
    }

  }

  ngHandle(option: string, data?: any): void {

    switch (option) {
      case 'getPaciente': {
        this.ngController('getPaciente');
        break;
      }
      case 'getEquipo': {
        this.ngController('getEquipo');
        break;
      }
      case 'getTipoConsulta': {
        this.ngController('getTipoConsulta');
        break;
      }
      case 'getEquipoView': {
        this.ngController('getEquipoView');
        break;
      }
      case 'getAgenda': {
        this.ngController('getAgenda');
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
      case 'getPaciente': {
        this.ngModelSet('getPaciente');
        this.ngGetPaciente(2, this.iPaciente);
        break;
      }
      case 'getEquipo': {
        this.ngModelSet('getEquipo');
        this.ngGetEquipo(2, this.iEquipo);
        break;
      }
      case 'getTipoConsulta': {
        this.ngModelSet('getTipoConsulta');
        this.ngGetTipoConsulta(2, this.iTipoConsulta);
        break;
      }
      case 'getEquipoView': {
        this.ngModelSet('getEquipoView');
        this.ngGetEquipoView(1, this.iEquipoView);
        break;
      }
      case 'getAgenda': {
        this.ngModelSet('getAgenda');
        this.ngGetAgenda(2, this.iAgenda);
        break;
      }
      case 'postAgenda': {
        this.ngModelSet('postAgenda');
        this.ngPostAgenda(this.iAgenda);
        break;
      }
      case 'deleteAgenda': {
        this.ngModelSet('deleteAgenda');
        this.ngDeleteAgenda(1, this.inAgenda);
        break;
      }
    }

  }

  async ngGetPaciente(option: number, model: IPaciente) {

    await this.service.ngGetPaciente(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getPaciente', r.data);
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

  async ngGetEquipo(option: number, model: IEquipo) {

    await this.service.ngGetEquipo(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getEquipo', r.data);
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

  async ngGetTipoConsulta(option: number, model: ITipoConsulta) {

    await this.service.ngGetTipoConsulta(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getTipoConsulta', r.data);
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

  async ngGetEquipoView(option: number, model: IEquipoView) {

    await this.service.ngGetEquipoView(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getEquipoView', r.data);
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

  async ngGetAgenda(option: number, model: IAgenda) {

    await this.service.ngGetAgenda(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getAgenda', r.data);
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

  async ngPostAgenda(model: IAgenda) {

    await this.service.ngPostAgenda(model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('postAgenda', r.data);
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

  async ngDeleteAgenda(option: number, model: IAgenda[]) {

    await this.service.ngDeleteAgenda(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('deleteAgenda', r.data);
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

  handleDateSelect(selectInfo: any) {
    const title = prompt('Ingrese el título de la cita:');
    if (title) {
      this.calendarApi = selectInfo.view.calendar;
      this.ngClean('agenda');
      this.comentario = title;
      this.fechaAgenda = selectInfo.startStr;
      this.fechaInicio = selectInfo.startStr;
      this.fechaFin = selectInfo.endStr;
      this.ngController('postAgenda');
    }
  }

  handleEventClick(clickInfo: any) {
    if (confirm(`¿Eliminar la cita "${clickInfo.event.title}"?`)) {
      clickInfo.event.remove();
      this.idAgenda = clickInfo.event.extendedProps.idAgenda;
      this.comentario = clickInfo.event.title;
      this.fechaAgenda = clickInfo.event.startStr;
      this.fechaInicio = clickInfo.event.startStr;
      this.fechaFin = clickInfo.event.endStr;
      this.ngController('deleteAgenda');
    }
  }

  habilitarCalendario() {
    if (this.idPaciente != 0 && this.idEquipo != 0 && this.idTipoConsulta != 0) {
      this.calendarOptions = {
        ...this.calendarOptions,
        selectable: true
      };
    }
  }

  ngEquipoCalendario() {
    let events: any[] = [];

    this.inAgenda.forEach(r => {
      if (!this.idEquipo || this.idEquipo === 0 || r.idEquipo == this.idEquipo) {
        events.push({
          id: r.idEquipo,
          start: r.fechaInicio,
          end: r.fechaFin,
          title: r.comentario,
          backgroundColor: this.colorAgenda[r.idEquipo] || '#1976d2',
          extendedProps: { idAgenda: r.id }
        });
      }
    });

    const calendarApi = this.calendarComponent.getApi();
    calendarApi.removeAllEvents();
    events.forEach(e => calendarApi.addEvent(e));
  }

  resetEquipo(event: MouseEvent) {
    event.stopPropagation();
    this.idEquipo = 0;
    this.ngEquipoCalendario();

  }

}
