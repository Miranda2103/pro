export interface IResponse {
  success: boolean,
  message: string,
  data: any
}

export interface IVersion {
  version: string
}

//#region "Interfaces"

export interface IAutenticacion {
  usuario: string,
  contrasena: string
}

export interface IToken {
  id: number,
  usuario: string,
  nombreUsuario: string,
  cambiaContrasena: boolean,
  idRol: number,
  idOrganizacion: number,
  token: string
}

export interface IOrganizacion {
  id: number,
  organizacion: string,
  nombre: string,
  apellidoPaterno: string,
  apellidoMaterno: string,
  nombreCompleto: string,
  telefono: string,
  correo: string,
  calle: string,
  numeroExterior: string,
  numeroInterior: string,
  colonia: string,
  municipio: string,
  estado: string,
  idUsuarioInserta: number,
  fechaInserta: string,
  idUsuarioActualiza: number,
  fechaActualiza: string,
  activo: boolean
}

export interface IUsuario {
  id: number,
  usuario: string,
  contrasena: string,
  nombre: string,
  apellidoPaterno: string,
  apellidoMaterno: string,
  nombreCompleto: string,
  cambiaContrasena: boolean,
  idRol: number,
  idOrganizacion: number,
  idUsuarioInserta: number,
  fechaInserta: string,
  idUsuarioActualiza: number,
  fechaActualiza: string,
  activo: boolean
}

export interface IMenu {
  id: number,
  menu: string,
  ruta: string,
  icono: string,
  orden: number,
  idUsuarioInserta: number,
  fechaInserta: string,
  idUsuarioActualiza: number,
  fechaActualiza: string,
  activo: boolean
}
export interface ISubMenu {
  id: number,
  idMenu: number,
  subMenu: string,
  ruta: string,
  icono: string,
  orden: number,
  idUsuarioInserta: number,
  fechaInserta: string,
  idUsuarioActualiza: number,
  fechaActualiza: string,
  activo: boolean
}

export interface IRol {
  id: number,
  rol: string,
  idOrganizacion: number,
  idUsuarioInserta: number,
  fechaInserta: string,
  idUsuarioActualiza: number,
  fechaActualiza: string,
  activo: boolean
}

export interface IRolMenu {
  id: number,
  idRol: number,
  idMenu: number,
  idUsuarioInserta: number,
  fechaInserta: string,
  idUsuarioActualiza: number,
  fechaActualiza: string,
  activo: boolean
}

export interface IRolSubMenu {
  id: number,
  idRol: number,
  idMenu: number,
  idSubMenu: number,
  idUsuarioInserta: number,
  fechaInserta: string,
  idUsuarioActualiza: number,
  fechaActualiza: string,
  activo: boolean
}

export interface IExtensionDescarga {
  id: number,
  extension: string
}

//#endregion "Interfaces"

//#region "View"

export interface IOrganizacionView {
  idOrganizacion: number,
  empresa: string,
  nombre: string,
  apellidoPaterno: string,
  apellidoMaterno: string,
  nombreCompleto: string,
  telefono: string,
  correo: string,
  calle: string,
  numeroExterior: string,
  numeroInterior: string,
  colonia: string,
  municipio: string,
  estado: string,
  fecha: string,
  activo: boolean
}

export interface IUsuarioView {
  idUsuario: number,
  usuario: string,
  contrasena: string,
  nombre: string,
  apellidoPaterno: string,
  apellidoMaterno: string,
  nombreCompleto: string,
  idRol: number,
  rol: string,
  idOrganizacion: number,
  tipoCarteras: string,
  carteras: string,
  fecha: string,
  activo: boolean
}


export interface IMenuView {
  idMenu: number,
  menu: string,
  ruta: string,
  icono: string,
  orden: number,
  estatus: boolean,
  fecha: string,
  activo: boolean
}

export interface ISubMenuView {
  idMenu: number,
  menu: string,
  idSubMenu: number,
  subMenu: string,
  ruta: string,
  icono: string,
  orden: number,
  estatus: boolean,
  fecha: string,
  activo: boolean
}


export interface IRolView {
  idRol: number,
  rol: string,
  fecha: string,
  activo: boolean
}

export interface IRolMenuView {
  idRol: number,
  rol: string,
  idMenu: number,
  menu: string,
  ruta: string,
  icono: string,
  orden: number,
  idOrganizacion: number,
  fecha: string,
  activo: boolean
}

export interface IRolSubMenuView {
  idRol: number,
  rol: string,
  idMenu: number,
  menu: string,
  idSubMenu: number,
  subMenu: string,
  subMenuR: string,
  ruta: string,
  icono: string,
  orden: number,
  idOrganizacion: number,
  fecha: string,
  activo: boolean
}

//#endregion "View"

//#region "Store"

export interface IFiltro {
  idOrganizacion: number,
  idRol: number,
  idMenu: number,
  registros: number,
  pagina: number,
  ordenColumna: string,
  ordenValor: string,
  filtro: string,
  filtroColumna: string,
  filtroValor: string,
  formato: string
}

export interface IFiltroLista {
  id: string,
  valor: string,
  lista: number
}

export interface IFiltroTotal {
  total: number
}

export interface IOrganizacionVista {
  idOrganizacion: number,
  organizacion: string,
  nombre: string,
  apellidoPaterno: string,
  apellidoMaterno: string,
  nombreCompleto: string,
  telefono: string,
  correo: string,
  calle: string,
  numeroExterior: string,
  numeroInterior: string,
  colonia: string,
  municipio: string,
  estado: string,
  fecha: string,
  hora: string,
  usuario: string,
  nombreUsuario: string,
  activo: boolean
}

export interface IRolVista {
  idRol: number,
  rol: string,
  idOrganizacion: number,
  organizacion: string,
  fecha: string,
  hora: string,
  usuario: string,
  nombreUsuario: string,
  activo: boolean
}

export interface IRolMenuVista {
  idMenu: number,
  menu: string,
  icono: string,
  orden: number,
  activo: boolean
}

export interface IRolSubMenuVista {
  idSubMenu: number,
  subMenu: string,
  icono: string,
  orden: number,
  activo: boolean
}

export interface IUsuarioVista {
  idUsuario: number,
  usuario: string,
  contrasena: string,
  nombre: string,
  apellidoPaterno: string,
  apellidoMaterno: string,
  nombreCompleto: string,
  cambiaContrasena: boolean,
  idRol: number,
  rol: string,
  idOrganizacion: number,
  organizacion: string,
  fecha: string,
  hora: string,
  user: string,
  nombreUsuario: string,
  activo: boolean
}

//#endregion "Store"
