import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { IColonia, IEstado, IMunicipio, IPaciente, IPacienteImagen, IResponse, ISexo } from '../../interface/interface-pro.interface';
import { Message } from '../../message/message';
import { ServiceProService } from '../../service/service-pro.service';
import { Shared } from '../../shared/shared';
import { saveAs } from "file-saver";

@Component({
  selector: 'app-dialog-patient',
  templateUrl: './dialog-patient.component.html',
  styleUrls: ['./dialog-patient.component.css']
})
export class DialogPatientComponent implements OnInit {

  iPaciente: IPaciente;
  inPaciente: IPaciente[] = [];

  iPacienteImagen: IPacienteImagen;
  inPacienteImagen: IPacienteImagen[] = [];

  file: File;
  previewUrl: any;

  iSexo: ISexo;
  inSexo: ISexo[] = [];
  filteredSexo: ISexo[] = [];

  iEstado: IEstado;
  inEstado: IEstado[] = [];
  filteredEstado: IEstado[] = [];

  iMunicipio: IMunicipio;
  inMunicipio: IMunicipio[] = [];
  filteredMunicipio: IMunicipio[] = [];

  iColonia: IColonia;
  inColonia: IColonia[] = [];
  filteredColonia: IColonia[] = [];

  constructor(private cdr: ChangeDetectorRef, public shared: Shared, public dialog: MatDialogRef<DialogPatientComponent>, @Inject(MAT_DIALOG_DATA) public data: any, protected service: ServiceProService, public message: Message, private sanitizer: DomSanitizer) {
    this.iPaciente = data['model'];
  }

  ngOnInit(): void {
    this.ngHandle('getSexo');
    this.ngHandle('getPacienteImagen');
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
        break;
      }
      case 'iPacienteImagen': {
        this.iPacienteImagen = { id: 0, idPaciente: 0, ruta: '', nombre: '', extension: '', archivo: '', imagen: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inPacienteImagen': {
        this.inPacienteImagen = [];
        break;
      }
      case 'iSexo': {
        this.iSexo = { id: 0, sexo: '', idOrganizacion: this.shared.idOrganizacion, idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inSexo': {
        this.inSexo = [];
        break;
      }
      case 'iEstado': {
        this.iEstado = { id: 0, estado: '', idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inEstado': {
        this.inEstado = [];
        break;
      }
      case 'iMunicipio': {
        this.iMunicipio = { id: 0, idEstado: 0, municipio: '', idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inMunicipio': {
        this.inMunicipio = [];
        break;
      }
      case 'iColonia': {
        this.iColonia = { id: 0, idEstado: 0, idMunicipio: 0, colonia: '', codigoPostal: '', idUsuarioInserta: this.shared.idUsuario, fechaInserta: this.shared.ngFechaInserta(), idUsuarioActualiza: this.shared.idUsuario, fechaActualiza: this.shared.ngFechaActualiza(), activo: true };
        break;
      }
      case 'inColonia': {
        this.inColonia = [];
        break;
      }
      case 'iPaciente.paciente': {
        this.iPaciente.paciente = '';
        break;
      }
      case 'iPaciente.nombre': {
        this.iPaciente.nombre = '';
        break;
      }
      case 'iPaciente.apellidoPaterno': {
        this.iPaciente.apellidoPaterno = '';
        break;
      }
      case 'iPaciente.apellidoMaterno': {
        this.iPaciente.apellidoMaterno = '';
        break;
      }
      case 'iPaciente.fechaNacimiento': {
        this.iPaciente.fechaNacimiento = '';
        break;
      }
      case 'iPaciente.idSexo': {
        this.iPaciente.idSexo = 0;
        break;
      }
      case 'iPaciente.idEstado': {
        this.iPaciente.idEstado = 0;
        break;
      }
      case 'iPaciente.idMunicipio': {
        this.iPaciente.idMunicipio = 0;
        break;
      }
      case 'iPaciente.idColonia': {
        this.iPaciente.idColonia = 0;
        break;
      }
      case 'iPaciente.codigoPostal': {
        this.iPaciente.codigoPostal = '';
        break;
      }
      case 'iPaciente.calle': {
        this.iPaciente.calle = '';
        break;
      }
      case 'iPaciente.numeroInterior': {
        this.iPaciente.numeroInterior = '';
        break;
      }
      case 'iPaciente.numeroExterior': {
        this.iPaciente.numeroExterior = '';
        break;
      }
      case 'iPaciente.telefonoMovil': {
        this.iPaciente.telefonoMovil = '';
        break;
      }
      case 'iPaciente.telefonoCasa': {
        this.iPaciente.telefonoCasa = '';
        break;
      }
      case 'iPaciente.correo': {
        this.iPaciente.correo = '';
        break;
      }
    }

  }

  ngModelSet(option: string, data?: any): void {

    switch (option) {
      case 'getSexo': {
        this.ngClean('iSexo');
        break;
      }
      case 'getEstado': {
        this.ngClean('iEstado');
        break;
      }
      case 'getMunicipio': {
        this.ngClean('iMunicipio');
        this.iMunicipio.idEstado = this.iPaciente.idEstado;
        break;
      }
      case 'getColonia': {
        this.ngClean('iColonia');
        this.iColonia.idEstado = this.iPaciente.idEstado;
        this.iColonia.idMunicipio = this.iPaciente.idMunicipio;
        break;
      }
      case 'getPaciente': {
        this.iPaciente.fechaNacimiento = this.shared.ngDateISO(new Date(this.iPaciente.fechaNacimiento));
        break;
      }
      case 'postPaciente': {
        this.iPaciente.fechaNacimiento = this.shared.ngDateISO(new Date(this.iPaciente.fechaNacimiento));
        break;
      }
      case 'putPaciente': {

        break;
      }
      case 'getPacienteImagen': {
        this.ngClean('iPacienteImagen');
        this.iPacienteImagen.idPaciente = this.iPaciente.id;
        break;
      }
      case 'postPacienteImagen': {

        break;
      }
    }
  }

  ngModelGet(option: string, data?: any): void {

    switch (option) {
      case 'getSexo': {
        this.ngClean('inSexo');
        const model: ISexo[] = data as ISexo[];
        this.inSexo = model;
        this.filteredSexo = model;
        break;
      }
      case 'getEstado': {
        this.ngClean('inEstado');
        const model: IEstado[] = data as IEstado[];
        this.inEstado = model;
        this.filteredEstado = model;
        break;
      }
      case 'getMunicipio': {
        this.ngClean('inMunicipio');
        const model: IMunicipio[] = data as IMunicipio[];
        this.inMunicipio = model;
        this.filteredMunicipio = model;
        break;
      }
      case 'getColonia': {
        this.ngClean('inColonia');
        const model: IColonia[] = data as IColonia[];
        this.inColonia = model;
        this.filteredColonia = model;
        break;
      }
      case 'getPaciente': {
        const model: IPaciente[] = data as IPaciente[];
        this.inPaciente = model;
        this.iPaciente = this.inPaciente[0];
        break;
      }
      case 'postPaciente': {
        this.iPaciente.id = data;
        break;
      }
      case 'putPaciente': {

        break;
      }
      case 'getPacienteImagen': {
        const model: IPacienteImagen[] = data as IPacienteImagen[];
        this.inPacienteImagen = model;
        this.iPacienteImagen = this.inPacienteImagen[0];
        break;
      }
      case 'postPacienteImagen': {

        break;
      }
    }
  }

  ngController(option: string, data?: any): void {

    switch (option) {
      case 'getSexo': {
        this.ngModelSet('getSexo');
        this.ngGetSexo(2, this.iSexo);
        break;
      }
      case 'getEstado': {
        this.ngModelSet('getEstado');
        this.ngGetEstado(2, this.iEstado);
        break;
      }
      case 'getMunicipio': {
        this.ngModelSet('getMunicipio');
        this.ngGetMunicipio(2, this.iMunicipio);
        break;
      }
      case 'getColonia': {
        this.ngModelSet('getColonia');
        this.ngGetColonia(2, this.iColonia);
        break;
      }
      case 'getPaciente': {
        this.ngModelSet('getPaciente');
        this.ngGetPaciente(1, this.iPaciente);
        break;
      }
      case 'postPaciente': {
        this.ngModelSet('postPaciente');
        this.ngPostPaciente(this.iPaciente);
        break;
      }
      case 'putPaciente': {
        this.ngModelSet('putPaciente');
        this.ngPutPaciente(1, this.iPaciente);
        break;
      }
      case 'getPacienteImagen': {
        this.ngModelSet('getPacienteImagen');
        this.ngGetPacienteImagen(3, this.iPacienteImagen);
        break;
      }
      case 'postPacienteImagen': {
        this.ngPostPacienteImagen(this.iPaciente, this.file);
        break;
      }
    }

  }

  ngHandle(option: string, data?: any): void {

    switch (option) {
      case 'getSexo': {
        this.ngController('getSexo');
        break;
      }
      case 'getMunicipio': {

        if (this.iPaciente.id != 0) {
          this.ngController('getMunicipio');
        }

        break;
      }
      case 'getColonia': {

        if (this.iPaciente.id != 0) {
          this.ngController('getColonia');
        }

        break;
      }
      case 'getPacienteImagen': {
        this.ngClean('iPacienteImagen');

        if (this.iPaciente.id != 0) {
          this.ngController('getPacienteImagen');
        }

        break;
      }
      case 'paciente': {

        if (this.ngValidate('paciente')) {

          if (this.iPaciente.id == 0) {
            this.ngController('postPaciente');
          } else {
            this.ngController('putPaciente');
          }

        }

        break;
      }
      case 'postPacienteImagen': {

        if (this.file != undefined) {
          this.ngController('postPacienteImagen');
        }
        else {
          this.dialog.close(true);
        }

        break;
      }
    }

  }

  ngValidate(option: string, data?: any): boolean {
    let b: boolean = true;

    switch (option) {
      case 'getPaciente': {

        if (this.inPaciente.length) {
          this.message.dialogMessage('No es posible agregar el paciente <b>' + this.iPaciente.paciente + '</b> debido a que ya se encuentra agregado, intenta con uno diferente.');
          this.ngClean('iPaciente.paciente');
          b = false;
        }

        break;
      }
      case 'paciente': {

        if (this.iPaciente.telefonoMovil.length < 10) {
          b = false;
          this.message.dialogMessage('Ingresa el numero de teléfono movil a 10 digitos.');
        }
        else if (!this.shared.ngEmail(this.iPaciente.correo)) {
          b = false;
          this.message.dialogMessage('Formato de correo electronico incorrecto, verifica que cuente con un formato valido.');
        }

        break;
      }
    }

    return b;
  }

  async ngGetSexo(option: number, model: ISexo) {

    await this.service.ngGetSexo(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getSexo', r.data);
          this.ngController('getEstado');
        }
        else {
          this.message.dialogMessage(this.shared.ngFalse());
        }

      }).catch(
        (e: any) => {
          console.error(e);
          this.message.dialogMessage(this.shared.ngError(e));
        }
      ).finally(() => { });

  }

  async ngGetEstado(option: number, model: IEstado) {

    await this.service.ngGetEstado(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getEstado', r.data);
          this.ngHandle('getMunicipio');
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

  async ngGetMunicipio(option: number, model: IMunicipio) {

    await this.service.ngGetMunicipio(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getMunicipio', r.data);
          this.ngHandle('getColonia');
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

  async ngGetColonia(option: number, model: IColonia) {

    await this.service.ngGetColonia(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getColonia', r.data);
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

  async ngGetPaciente(option: number, model: IPaciente) {

    await this.service.ngGetPaciente(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getPaciente', r.data);
          this.ngHandle('postPacienteImagen');
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

  async ngGetPacienteImagen(option: number, model: IPacienteImagen) {

    await this.service.ngGetPacienteImagen(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('getPacienteImagen', r.data);
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

  async ngPostPaciente(model: IPaciente) {

    await this.service.ngPostPaciente(model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('postPaciente', r.data);
          this.ngController('getPaciente');
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

  async ngPostPacienteImagen(model: IPaciente, file: File) {

    await this.service.ngPostPacienteImagen(model, file)
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

  async ngPutPaciente(option: number, model: IPaciente) {

    await this.service.ngPutPaciente(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngHandle('postPacienteImagen');
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

  async ngDownload() {

    await this.service.ngDownloadPacienteImagen(this.iPacienteImagen)
      .then(async (r: any) => {

        var blob = new Blob([r], { type: 'image/' + this.iPacienteImagen.extension.replace('.', '') });
        var filename = this.iPacienteImagen.nombre + this.iPacienteImagen.extension;
        saveAs(blob, filename);

      }).catch(
        (e: any) => {
          console.error(e);
          this.message.dialogMessage(this.shared.ngError(e));
        }
      ).finally(() => { });

  }

  ngGetAge(): void {

    const today = new Date();
    const nacimiento = new Date(this.iPaciente.fechaNacimiento);

    let age = today.getFullYear() - nacimiento.getFullYear();
    const month = today.getMonth() - nacimiento.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < nacimiento.getDate())) {
      age--;
    }

    this.iPaciente.edad = age;

  }

  ngGetPostalCode(): void {
    this.iPaciente.codigoPostal = this.inColonia.find(r => r.id == this.iPaciente.idColonia)?.codigoPostal || '';
  }

  ngImage() {
    if (this.iPacienteImagen.id == 0) {
      return '../../assets/default.png';
    } else {
      return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/' + this.iPacienteImagen.extension.replace('.', '') + ';base64,' + this.iPacienteImagen.imagen);
    }
  }

  ngFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    const newName = file.name.replace(/\.[^/.]+$/, '') + this.shared.ngDateNumber() + file.name.match(/\.[^/.]+$/);
    const newFile = new File([file], newName, { type: file.type });

    this.file = newFile;

    this.ngClean('iPacienteImagen');

    const reader = new FileReader();
    this.iPacienteImagen.extension = file.name.split('.').pop();
    reader.onload = () => { const result = reader.result as string; this.iPacienteImagen.imagen = result.replace(/^data:image\/[a-zA-Z]+;base64,/, ''); };
    reader.readAsDataURL(newFile);

  }

}
