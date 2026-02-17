export interface IResponse {
  success: boolean,
  message: string,
  data: any
}

//#region "Store"

export interface IFiltro {
  idOrganizacion: number,
  idCartera: number,
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
  bitacora: string,
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
  activo: boolean,
  tipoBitacora: string
}

export interface ICarteraVista {
  bitacora: string,
  idCartera: number,
  cartera: string,
  idTipoCartera: number,
  tipoCartera: string,
  idOrganizacion: number,
  fecha: string,
  hora: string,
  usuario: string,
  nombreUsuario: string,
  activo: boolean,
  tipoBitacora: string
}

export interface IPanelVista {
  bitacora: string,
  idPanel: number,
  calificacion: string,
  prioridad: number,
  agenda: boolean,
  acuerdo: boolean,
  multiple: boolean,
  hold: boolean,
  bloqueo: boolean,
  listaNegra: boolean
  idCartera: number,
  idOrganizacion: number,
  fecha: string,
  hora: string,
  usuario: string,
  nombreUsuario: string,
  activo: boolean,
  tipoBitacora: string
}

export interface IUsuarioVista {
  bitacora: string,
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
  idsTipoCartera: string,
  tipoCartera: string,
  idsCartera: string,
  cartera: string,
  fecha: string,
  hora: string,
  user: string,
  nombreUsuario: string,
  activo: boolean,
  tipoBitacora: string
}

//#endregion "Store"
