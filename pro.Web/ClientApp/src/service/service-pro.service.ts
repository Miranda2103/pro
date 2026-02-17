import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IAutenticacion, IFiltro, IMenu, IOrganizacion, IResponse, IRol, IRolMenu, IRolMenuView, IRolSubMenu, IRolSubMenuView, ISubMenu, IUsuario } from '../interface/interface-pro.interface';

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

  //#endregion "VIEW"


  //#region "POST"

  async ngPostToken(model: IAutenticacion) {
    return await this.http.post<IResponse>(this.serviceUrl + 'api/pro/Token/Post', model).toPromise();
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

  //#endregion "POST"


  //#region "PUT"

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

  //#endregion "PUT"


  //#region "DELETE"

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

  //#endregion "DELETE"


  //#region "DOWNLOAD"


  //#endregion "DOWNLOAD"


  //#region "STORE"

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
