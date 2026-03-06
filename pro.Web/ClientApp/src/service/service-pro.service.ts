import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IAgenda, IAutenticacion, IAvisoImagen, IColonia, IConsentimientoImagen, IDecision, IEquipo, IEquipoView, IEstado, IFiltro, IFormaPago, IHemodialisis, ILlegada, IMenu, IMunicipio, IOrganizacion, IPaciente, IPacienteImagen, IPago, IPagoImagen, IResponse, IRol, IRolMenu, IRolMenuView, IRolSubMenu, IRolSubMenuView, ISexo, ISubMenu, ITipoConsulta, ITransHemodialisis, IUsuario } from '../interface/interface-pro.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceProService {

  private serviceUrl: string;

  constructor(public http: HttpClient, @Inject('SERVICE_URL') serviceUrl: string) {
    this.serviceUrl = serviceUrl;
  }

  //#region "GET"

  ngGetVersion() {
    return this.http.get<IResponse>(this.serviceUrl + 'api/pro/Version/Get').toPromise();
  }

  async ngGetPaciente(option: number, model: IPaciente) {
    let params = new HttpParams();

    params = params.append('option', option);
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/Paciente/Get', { params: params }).toPromise();
  }

  async ngGetPacienteImagen(option: number, model: IPacienteImagen) {
    let params = new HttpParams();

    params = params.append('option', option);
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/PacienteImagen/Get', { params: params }).toPromise();
  }

  async ngGetHemodialisis(option: number, model: IHemodialisis) {
    let params = new HttpParams();

    params = params.append('option', option);
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/Hemodialisis/Get', { params: params }).toPromise();
  }

  async ngGetTransHemodialisis(option: number, model: ITransHemodialisis) {
    let params = new HttpParams();

    params = params.append('option', option);
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/TransHemodialisis/Get', { params: params }).toPromise();
  }

  async ngGetLlegada(option: number, model: ILlegada) {
    let params = new HttpParams();

    params = params.append('option', option);
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/Llegada/Get', { params: params }).toPromise();
  }

  async ngGetPago(option: number, model: IPago) {
    let params = new HttpParams();

    params = params.append('option', option);
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/Pago/Get', { params: params }).toPromise();
  }

  async ngGetPagoImagen(option: number, model: IPagoImagen) {
    let params = new HttpParams();

    params = params.append('option', option);
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/PagoImagen/Get', { params: params }).toPromise();
  }

  async ngGetConsentimientoImagen(option: number, model: IConsentimientoImagen) {
    let params = new HttpParams();

    params = params.append('option', option);
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/ConsentimientoImagen/Get', { params: params }).toPromise();
  }

  async ngGetAvisoImagen(option: number, model: IAvisoImagen) {
    let params = new HttpParams();

    params = params.append('option', option);
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/AvisoImagen/Get', { params: params }).toPromise();
  }

  async ngGetAgenda(option: number, model: IAgenda) {
    let params = new HttpParams();

    params = params.append('option', option);
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/Agenda/Get', { params: params }).toPromise();
  }

  async ngGetOrganizacion(option: number, model: IOrganizacion) {
    let params = new HttpParams();

    params = params.append('option', option);
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/Organizacion/Get', { params: params }).toPromise();
  }

  async ngGetUsuario(option: number, model: IUsuario) {
    let params = new HttpParams();

    params = params.append('option', option);
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/Usuario/Get', { params: params }).toPromise();
  }

  async ngGetMenu(option: number, model: IMenu) {
    let params = new HttpParams();

    params = params.append('option', option);
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/Menu/Get', { params: params }).toPromise();
  }

  async ngGetSubMenu(option: number, model: ISubMenu) {
    let params = new HttpParams();

    params = params.append('option', option);
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/SubMenu/Get', { params: params }).toPromise();
  }

  async ngGetRol(option: number, model: IRol) {
    let params = new HttpParams();

    params = params.append('option', option);
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/Rol/Get', { 'params': params }).toPromise();
  }

  async ngGetRolMenu(option: number, model: IRolMenu) {
    let params = new HttpParams();

    params = params.append('option', option);
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/RolMenu/Get', { 'params': params }).toPromise();
  }

  async ngGetRolSubMenu(option: number, model: IRolSubMenu) {
    let params = new HttpParams();

    params = params.append('option', option);
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/RolSubMenu/Get', { 'params': params }).toPromise();
  }

  async ngGetSexo(option: number, model: ISexo) {
    let params = new HttpParams();

    params = params.append('option', option);
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/Sexo/Get', { params: params }).toPromise();
  }

  async ngGetEstado(option: number, model: IEstado) {
    let params = new HttpParams();

    params = params.append('option', option);
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/Estado/Get', { params: params }).toPromise();
  }

  async ngGetMunicipio(option: number, model: IMunicipio) {
    let params = new HttpParams();

    params = params.append('option', option);
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/Municipio/Get', { params: params }).toPromise();
  }

  async ngGetColonia(option: number, model: IColonia) {
    let params = new HttpParams();

    params = params.append('option', option);
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/Colonia/Get', { params: params }).toPromise();
  }

  async ngGetDecision(option: number, model: IDecision) {
    let params = new HttpParams();

    params = params.append('option', option);
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/Decision/Get', { params: params }).toPromise();
  }

  async ngGetEquipo(option: number, model: IEquipo) {
    let params = new HttpParams();

    params = params.append('option', option);
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/Equipo/Get', { params: params }).toPromise();
  }

  async ngGetFormaPago(option: number, model: IFormaPago) {
    let params = new HttpParams();

    params = params.append('option', option);
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/FormaPago/Get', { params: params }).toPromise();
  }

  async ngGetTipoConsulta(option: number, model: ITipoConsulta) {
    let params = new HttpParams();

    params = params.append('option', option);
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/TipoConsulta/Get', { params: params }).toPromise();
  }

  //#endregion "GET"


  //#region "VIEW"

  async ngGetRolMenuView(option: number, model: IRolMenuView) {
    let params = new HttpParams();

    params = params.append('option', option);
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/VRolMenu/Get', { params: params }).toPromise();
  }

  async ngGetRolSubMenuView(option: number, model: IRolSubMenuView) {
    let params = new HttpParams();

    params = params.append('option', option);
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/VRolSubMenu/Get', { params: params }).toPromise();
  }

  async ngGetEquipoView(option: number, model: IEquipoView) {
    let params = new HttpParams();

    params = params.append('option', option);
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/VEquipo/Get', { params: params }).toPromise();
  }

  //#endregion "VIEW"


  //#region "POST"

  async ngPostToken(model: IAutenticacion) {
    return await this.http.post<IResponse>(this.serviceUrl + 'api/pro/Token/Post', model).toPromise();
  }

  async ngPostPaciente(model: IPaciente) {
    return await this.http.post<IResponse>(this.serviceUrl + 'api/pro/Paciente/Post', model).toPromise();
  }

  async ngPostPacienteImagen(model: IPaciente, file: File) {
    const formData: FormData = new FormData();

    formData.append('paciente', model.paciente);
    formData.append('idPaciente', model.id.toString());
    formData.append('file', file, file.name);
    formData.append('idOrganizacion', model.idOrganizacion.toString());
    formData.append('idUsuarioInserta', model.idUsuarioInserta.toString());

    return await this.http.post<IResponse>(this.serviceUrl + 'api/pro/PacienteImagen/Post', formData).toPromise();
  }

  async ngPostHemodialisis(model: IHemodialisis) {
    return await this.http.post<IResponse>(this.serviceUrl + 'api/pro/Hemodialisis/Post', model).toPromise();
  }

  async ngPostTransHemodialisis(model: ITransHemodialisis[]) {
    return await this.http.post<IResponse>(this.serviceUrl + 'api/pro/TransHemodialisis/Post', model).toPromise();
  }

  async ngPostLlegada(model: ILlegada) {
    return await this.http.post<IResponse>(this.serviceUrl + 'api/pro/Llegada/Post', model).toPromise();
  }

  async ngPostPago(model: IPago) {
    return await this.http.post<IResponse>(this.serviceUrl + 'api/pro/Pago/Post', model).toPromise();
  }

  async ngPostPagoImagen(iPaciente: IPaciente, iPagoImagen: IPagoImagen, file: File) {
    const formData: FormData = new FormData();

    formData.append('paciente', iPaciente.paciente);
    formData.append('idPago', iPagoImagen.idPago.toString());
    formData.append('idAgenda', iPagoImagen.idAgenda.toString());
    formData.append('idPaciente', iPagoImagen.idPaciente.toString());
    formData.append('file', file, file.name);
    formData.append('idOrganizacion', iPagoImagen.idOrganizacion.toString());
    formData.append('idUsuarioInserta', iPagoImagen.idUsuarioInserta.toString());

    return await this.http.post<IResponse>(this.serviceUrl + 'api/pro/PagoImagen/Post', formData).toPromise();
  }

  async ngPostConsentimientoImagen(iPaciente: IPaciente, iConsentimientoImagen: IConsentimientoImagen, file: File) {
    const formData: FormData = new FormData();

    formData.append('paciente', iPaciente.paciente);
    formData.append('idPago', iConsentimientoImagen.idPago.toString());
    formData.append('idAgenda', iConsentimientoImagen.idAgenda.toString());
    formData.append('idPaciente', iConsentimientoImagen.idPaciente.toString());
    formData.append('file', file, file.name);
    formData.append('idOrganizacion', iConsentimientoImagen.idOrganizacion.toString());
    formData.append('idUsuarioInserta', iConsentimientoImagen.idUsuarioInserta.toString());

    return await this.http.post<IResponse>(this.serviceUrl + 'api/pro/ConsentimientoImagen/Post', formData).toPromise();
  }

  async ngPostAvisoImagen(iPaciente: IPaciente, iAvisoImagen: IAvisoImagen, file: File) {
    const formData: FormData = new FormData();

    formData.append('paciente', iPaciente.paciente);
    formData.append('idPago', iAvisoImagen.idPago.toString());
    formData.append('idAgenda', iAvisoImagen.idAgenda.toString());
    formData.append('idPaciente', iAvisoImagen.idPaciente.toString());
    formData.append('file', file, file.name);
    formData.append('idOrganizacion', iAvisoImagen.idOrganizacion.toString());
    formData.append('idUsuarioInserta', iAvisoImagen.idUsuarioInserta.toString());

    return await this.http.post<IResponse>(this.serviceUrl + 'api/pro/AvisoImagen/Post', formData).toPromise();
  }

  async ngPostAgenda(model: IAgenda) {
    return await this.http.post<IResponse>(this.serviceUrl + 'api/pro/Agenda/Post', model).toPromise();
  }

  async ngPostOrganizacion(model: IOrganizacion) {
    return await this.http.post<IResponse>(this.serviceUrl + 'api/pro/Organizacion/Post', model).toPromise();
  }

  async ngPostUsuario(model: IUsuario) {
    return await this.http.post<IResponse>(this.serviceUrl + 'api/pro/Usuario/Post', model).toPromise();
  }

  async ngPostMenu(model: IMenu) {
    return await this.http.post<IResponse>(this.serviceUrl + 'api/pro/Menu/Post', model).toPromise();
  }

  async ngPostSubMenu(model: ISubMenu) {
    return await this.http.post<IResponse>(this.serviceUrl + 'api/pro/SubMenu/Post', model).toPromise();
  }

  async ngPostRol(model: IRol) {
    return await this.http.post<IResponse>(this.serviceUrl + 'api/pro/Rol/Post', model).toPromise();
  }

  async ngPostRolMenu(model: IRolMenu[]) {
    return await this.http.post<IResponse>(this.serviceUrl + 'api/pro/RolMenu/Post', model).toPromise();
  }

  async ngPostRolSubMenu(model: IRolSubMenu[]) {
    return await this.http.post<IResponse>(this.serviceUrl + 'api/pro/RolSubMenu/Post', model).toPromise();
  }

  async ngPostSexo(model: ISexo) {
    return await this.http.post<IResponse>(this.serviceUrl + 'api/pro/Sexo/Post', model).toPromise();
  }

  async ngPostDecision(model: IDecision) {
    return await this.http.post<IResponse>(this.serviceUrl + 'api/pro/Decision/Post', model).toPromise();
  }

  async ngPostEquipo(model: IEquipo) {
    return await this.http.post<IResponse>(this.serviceUrl + 'api/pro/Equipo/Post', model).toPromise();
  }

  async ngPostFormaPago(model: IFormaPago) {
    return await this.http.post<IResponse>(this.serviceUrl + 'api/pro/FormaPago/Post', model).toPromise();
  }

  async ngPostTipoConsulta(model: ITipoConsulta) {
    return await this.http.post<IResponse>(this.serviceUrl + 'api/pro/TipoConsulta/Post', model).toPromise();
  }

  //#endregion "POST"


  //#region "PUT"

  async ngPutPaciente(option: number, model: IPaciente) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.put<IResponse>(this.serviceUrl + 'api/pro/Paciente/Put', model, { params: params }).toPromise();
  }

  async ngPutHemodialisis(option: number, model: IHemodialisis) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.put<IResponse>(this.serviceUrl + 'api/pro/Hemodialisis/Put', model, { params: params }).toPromise();
  }

  async ngPutTransHemodialisis(option: number, model: ITransHemodialisis) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.put<IResponse>(this.serviceUrl + 'api/pro/TransHemodialisis/Put', model, { params: params }).toPromise();
  }

  async ngPutLlegada(option: number, model: ILlegada) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.put<IResponse>(this.serviceUrl + 'api/pro/Llegada/Put', model, { params: params }).toPromise();
  }

  async ngPutPago(option: number, model: IPago) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.put<IResponse>(this.serviceUrl + 'api/pro/Pago/Put', model, { params: params }).toPromise();
  }

  async ngPutPagoImagen(option: number, model: IPagoImagen) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.put<IResponse>(this.serviceUrl + 'api/pro/PagoImagen/Put', model, { params: params }).toPromise();
  }

  async ngPutConsentimientoImagen(option: number, model: IConsentimientoImagen) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.put<IResponse>(this.serviceUrl + 'api/pro/ConsentimientoImagen/Put', model, { params: params }).toPromise();
  }

  async ngPutAvisoImagen(option: number, model: IAvisoImagen) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.put<IResponse>(this.serviceUrl + 'api/pro/AvisoImagen/Put', model, { params: params }).toPromise();
  }

  async ngPutAgenda(option: number, model: IAgenda) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.put<IResponse>(this.serviceUrl + 'api/pro/Agenda/Put', model, { params: params }).toPromise();
  }

  async ngPutOrganizacion(option: number, model: IOrganizacion) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.put<IResponse>(this.serviceUrl + 'api/pro/Organizacion/Put', model, { params: params }).toPromise();
  }

  async ngPutUsuario(option: number, model: IUsuario) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.put<IResponse>(this.serviceUrl + 'api/pro/Usuario/Put', model, { params: params }).toPromise();
  }

  async ngPutRol(option: number, model: IRol) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.put<IResponse>(this.serviceUrl + 'api/pro/Rol/Put', model, { params: params }).toPromise();
  }

  async ngPutMenu(option: number, model: IMenu) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.put<IResponse>(this.serviceUrl + 'api/pro/Menu/Put', model, { params: params }).toPromise();
  }

  async ngPutSubMenu(option: number, model: ISubMenu) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.put<IResponse>(this.serviceUrl + 'api/pro/SubMenu/Put', model, { params: params }).toPromise();
  }

  async ngPutSexo(option: number, model: ISexo) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.put<IResponse>(this.serviceUrl + 'api/pro/Sexo/Put', model, { params: params }).toPromise();
  }

  async ngPutDecision(option: number, model: IDecision) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.put<IResponse>(this.serviceUrl + 'api/pro/Decision/Put', model, { params: params }).toPromise();
  }

  async ngPutEquipo(option: number, model: IEquipo) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.put<IResponse>(this.serviceUrl + 'api/pro/Equipo/Put', model, { params: params }).toPromise();
  }

  async ngPutFormaPago(option: number, model: IFormaPago) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.put<IResponse>(this.serviceUrl + 'api/pro/FormaPago/Put', model, { params: params }).toPromise();
  }

  async ngPutTipoConsulta(option: number, model: ITipoConsulta) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.put<IResponse>(this.serviceUrl + 'api/pro/TipoConsulta/Put', model, { params: params }).toPromise();
  }

  //#endregion "PUT"


  //#region "DELETE"

  async ngDeletePaciente(option: number, model: IPaciente[]) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.delete<IResponse>(this.serviceUrl + 'api/pro/Paciente/Delete', { params: params, body: model }).toPromise();
  }

  async ngDeleteHemodialisis(option: number, model: IHemodialisis[]) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.delete<IResponse>(this.serviceUrl + 'api/pro/Hemodialisis/Delete', { params: params, body: model }).toPromise();
  }

  async ngDeleteTransHemodialisis(option: number, model: ITransHemodialisis[]) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.delete<IResponse>(this.serviceUrl + 'api/pro/TransHemodialisis/Delete', { params: params, body: model }).toPromise();
  }

  async ngDeleteLlegada(option: number, model: ILlegada[]) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.delete<IResponse>(this.serviceUrl + 'api/pro/Llegada/Delete', { params: params, body: model }).toPromise();
  }

  async ngDeletePago(option: number, model: IPago[]) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.delete<IResponse>(this.serviceUrl + 'api/pro/Pago/Delete', { params: params, body: model }).toPromise();
  }

  async ngDeletePagoImagen(option: number, model: IPagoImagen[]) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.delete<IResponse>(this.serviceUrl + 'api/pro/PagoImagen/Delete', { params: params, body: model }).toPromise();
  }

  async ngDeleteConsentimientoImagen(option: number, model: IConsentimientoImagen[]) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.delete<IResponse>(this.serviceUrl + 'api/pro/ConsentimientoImagen/Delete', { params: params, body: model }).toPromise();
  }

  async ngDeleteAvisoImagen(option: number, model: IAvisoImagen[]) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.delete<IResponse>(this.serviceUrl + 'api/pro/AvisoImagen/Delete', { params: params, body: model }).toPromise();
  }

  async ngDeleteAgenda(option: number, model: IAgenda[]) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.delete<IResponse>(this.serviceUrl + 'api/pro/Agenda/Delete', { params: params, body: model }).toPromise();
  }

  async ngDeleteOrganizacion(option: number, model: IOrganizacion[]) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.delete<IResponse>(this.serviceUrl + 'api/pro/Organizacion/Delete', { params: params, body: model }).toPromise();
  }

  async ngDeleteUsuario(option: number, model: IUsuario[]) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.delete<IResponse>(this.serviceUrl + 'api/pro/Usuario/Delete', { params: params, body: model }).toPromise();
  }

  async ngDeleteRol(option: number, model: IRol[]) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.delete<IResponse>(this.serviceUrl + 'api/pro/Rol/Delete', { params: params, body: model }).toPromise();
  }

  async ngDeleteRolMenu(option: number, model: IRolMenu[]) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.delete<IResponse>(this.serviceUrl + 'api/pro/RolMenu/Delete', { params: params, body: model }).toPromise();
  }

  async ngDeleteRolSubMenu(option: number, model: IRolSubMenu[]) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.delete<IResponse>(this.serviceUrl + 'api/pro/RolSubMenu/Delete', { params: params, body: model }).toPromise();
  }

  async ngDeleteSexo(option: number, model: ISexo[]) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.delete<IResponse>(this.serviceUrl + 'api/pro/Sexo/Delete', { params: params, body: model }).toPromise();
  }

  async ngDeleteDecision(option: number, model: IDecision[]) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.delete<IResponse>(this.serviceUrl + 'api/pro/Decision/Delete', { params: params, body: model }).toPromise();
  }

  async ngDeleteEquipo(option: number, model: IEquipo[]) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.delete<IResponse>(this.serviceUrl + 'api/pro/Equipo/Delete', { params: params, body: model }).toPromise();
  }

  async ngDeleteFormaPago(option: number, model: IFormaPago[]) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.delete<IResponse>(this.serviceUrl + 'api/pro/FormaPago/Delete', { params: params, body: model }).toPromise();
  }

  async ngDeleteTipoConsulta(option: number, model: ITipoConsulta[]) {
    let params = new HttpParams();
    params = params.append('option', option);

    return await this.http.delete<IResponse>(this.serviceUrl + 'api/pro/TipoConsulta/Delete', { params: params, body: model }).toPromise();
  }

  //#endregion "DELETE"


  //#region "DOWNLOAD"

  async ngDownloadPacienteImagen(model: IPacienteImagen) {
    let params = new HttpParams();
    params = params.append('archivo', model.archivo);

    return await this.http.get(this.serviceUrl + 'api/pro/PacienteImagen/Download', { 'params': params, responseType: 'blob' }).toPromise();
  }

  async ngDownloadReporteHemodialisis(model: IAgenda) {
    let params = new HttpParams();
    params = params.append('idAgenda', model.id);

    return await this.http.get(this.serviceUrl + 'api/pro/Hemodialisis/ReportHemodialisis', { 'params': params, responseType: 'blob' }).toPromise();
  }

  async ngDownloadPagoDocumento(model: IPago) {
    let params = new HttpParams();
    params = params.append('idAgenda', model.idAgenda);

    return await this.http.get(this.serviceUrl + 'api/pro/Pago/PaymentDocument', { 'params': params, responseType: 'blob' }).toPromise();
  }

  async ngDownloadConsentimientoDocumento(model: IPago) {
    let params = new HttpParams();
    params = params.append('idPaciente', model.idPaciente);

    return await this.http.get(this.serviceUrl + 'api/pro/Pago/ConsentDocument', { 'params': params, responseType: 'blob' }).toPromise();
  }

  async ngDownloadAvisoDocumento(model: IPago) {
    let params = new HttpParams();
    params = params.append('idPaciente', model.idPaciente);

    return await this.http.get(this.serviceUrl + 'api/pro/Pago/NoticeDocument', { 'params': params, responseType: 'blob' }).toPromise();
  }

  async ngDownloadPagoImagen(model: IPagoImagen) {
    let params = new HttpParams();
    params = params.append('archivo', model.archivo);

    return await this.http.get(this.serviceUrl + 'api/pro/PagoImagen/PaymentImage', { 'params': params, responseType: 'blob' }).toPromise();
  }

  async ngDownloadConsentimientoImagen(model: IConsentimientoImagen) {
    let params = new HttpParams();
    params = params.append('archivo', model.archivo);

    return await this.http.get(this.serviceUrl + 'api/pro/ConsentimientoImagen/ConsentImage', { 'params': params, responseType: 'blob' }).toPromise();
  }

  async ngDownloadAvisoImagen(model: IAvisoImagen) {
    let params = new HttpParams();
    params = params.append('archivo', model.archivo);

    return await this.http.get(this.serviceUrl + 'api/pro/AvisoImagen/NoticeImage', { 'params': params, responseType: 'blob' }).toPromise();
  }

  //#endregion "DOWNLOAD"


  //#region "STORE"

  async ngGetPacienteLista(model: IFiltro) {
    let params = new HttpParams();
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/WPaciente/GetFiltroLista', { 'params': params }).toPromise();
  }

  async ngGetPacienteTotal(model: IFiltro) {
    let params = new HttpParams();
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/WPaciente/GetFiltroTotal', { 'params': params }).toPromise();
  }

  async ngGetPacienteVista(model: IFiltro) {
    let params = new HttpParams();
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/WPaciente/GetFiltroVista', { 'params': params }).toPromise();
  }

  async ngGetPacienteExportar(model: IFiltro) {
    let params = new HttpParams();
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get(this.serviceUrl + 'api/pro/WPaciente/GetFiltroExportar', { 'params': params, responseType: 'blob' }).toPromise();
  }

  async ngGetAgendaLista(model: IFiltro) {
    let params = new HttpParams();
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/WAgenda/GetFiltroLista', { 'params': params }).toPromise();
  }

  async ngGetAgendaTotal(model: IFiltro) {
    let params = new HttpParams();
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/WAgenda/GetFiltroTotal', { 'params': params }).toPromise();
  }

  async ngGetAgendaVista(model: IFiltro) {
    let params = new HttpParams();
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/WAgenda/GetFiltroVista', { 'params': params }).toPromise();
  }

  async ngGetAgendaExportar(model: IFiltro) {
    let params = new HttpParams();
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get(this.serviceUrl + 'api/pro/WAgenda/GetFiltroExportar', { 'params': params, responseType: 'blob' }).toPromise();
  }

  async ngGetOrganizacionLista(model: IFiltro) {
    let params = new HttpParams();
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/WOrganizacion/GetFiltroLista', { 'params': params }).toPromise();
  }

  async ngGetOrganizacionTotal(model: IFiltro) {
    let params = new HttpParams();
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/WOrganizacion/GetFiltroTotal', { 'params': params }).toPromise();
  }

  async ngGetOrganizacionVista(model: IFiltro) {
    let params = new HttpParams();
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/WOrganizacion/GetFiltroVista', { 'params': params }).toPromise();
  }

  async ngGetOrganizacionExportar(model: IFiltro) {
    let params = new HttpParams();
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get(this.serviceUrl + 'api/pro/WOrganizacion/GetFiltroExportar', { 'params': params, responseType: 'blob' }).toPromise();
  }

  async ngGetRolLista(model: IFiltro) {
    let params = new HttpParams();
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/WRol/GetFiltroLista', { 'params': params }).toPromise();
  }

  async ngGetRolTotal(model: IFiltro) {
    let params = new HttpParams();
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/WRol/GetFiltroTotal', { 'params': params }).toPromise();
  }

  async ngGetRolVista(model: IFiltro) {
    let params = new HttpParams();
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/WRol/GetFiltroVista', { 'params': params }).toPromise();
  }

  async ngGetRolExportar(model: IFiltro) {
    let params = new HttpParams();
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get(this.serviceUrl + 'api/pro/WRol/GetFiltroExportar', { 'params': params, responseType: 'blob' }).toPromise();
  }

  async ngGetRolMenuLista(model: IFiltro) {
    let params = new HttpParams();
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/WRolMenu/GetFiltroLista', { 'params': params }).toPromise();
  }

  async ngGetRolMenuTotal(model: IFiltro) {
    let params = new HttpParams();
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/WRolMenu/GetFiltroTotal', { 'params': params }).toPromise();
  }

  async ngGetRolMenuVista(model: IFiltro) {
    let params = new HttpParams();
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/WRolMenu/GetFiltroVista', { 'params': params }).toPromise();
  }

  async ngGetRolMenuExportar(model: IFiltro) {
    let params = new HttpParams();
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get(this.serviceUrl + 'api/pro/WRolMenu/GetFiltroExportar', { 'params': params, responseType: 'blob' }).toPromise();
  }

  async ngGetRolSubMenuLista(model: IFiltro) {
    let params = new HttpParams();
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/WRolSubMenu/GetFiltroLista', { 'params': params }).toPromise();
  }

  async ngGetRolSubMenuTotal(model: IFiltro) {
    let params = new HttpParams();
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/WRolSubMenu/GetFiltroTotal', { 'params': params }).toPromise();
  }

  async ngGetRolSubMenuVista(model: IFiltro) {
    let params = new HttpParams();
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/WRolSubMenu/GetFiltroVista', { 'params': params }).toPromise();
  }

  async ngGetRolSubMenuExportar(model: IFiltro) {
    let params = new HttpParams();
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get(this.serviceUrl + 'api/pro/WRolSubMenu/GetFiltroExportar', { 'params': params, responseType: 'blob' }).toPromise();
  }

  async ngGetUsuarioLista(model: IFiltro) {
    let params = new HttpParams();
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/WUsuario/GetFiltroLista', { 'params': params }).toPromise();
  }

  async ngGetUsuarioTotal(model: IFiltro) {
    let params = new HttpParams();
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/WUsuario/GetFiltroTotal', { 'params': params }).toPromise();
  }

  async ngGetUsuarioVista(model: IFiltro) {
    let params = new HttpParams();
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get<IResponse>(this.serviceUrl + 'api/pro/WUsuario/GetFiltroVista', { 'params': params }).toPromise();
  }

  async ngGetUsuarioExportar(model: IFiltro) {
    let params = new HttpParams();
    Object.keys(model).forEach(key => { if (model[key] != '') { params = params.append(key, model[key]); } });

    return await this.http.get(this.serviceUrl + 'api/pro/WUsuario/GetFiltroExportar', { 'params': params, responseType: 'blob' }).toPromise();
  }

  //#region "STORE"

}
