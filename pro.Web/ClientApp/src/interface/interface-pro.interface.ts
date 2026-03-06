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

export interface IPaciente {
  id: number,
  paciente: string,
  nombre: string,
  apellidoPaterno: string,
  apellidoMaterno: string,
  nombreCompleto: string,
  fechaNacimiento: string,
  edad: number,
  idSexo: number,
  idEstado: number,
  idMunicipio: number,
  idColonia: number,
  codigoPostal: string,
  calle: string,
  numeroInterior: string,
  numeroExterior: string,
  telefonoMovil: string,
  telefonoCasa: string,
  correo: string,
  idOrganizacion: number,
  idUsuarioInserta: number,
  fechaInserta: string,
  idUsuarioActualiza: number,
  fechaActualiza: string,
  activo: boolean
}

export interface IPacienteImagen {
  id: number,
  idPaciente: number,
  ruta: string,
  nombre: string,
  extension: string,
  archivo: string,
  imagen: string,
  idOrganizacion: number,
  idUsuarioInserta: number,
  fechaInserta: string,
  idUsuarioActualiza: number,
  fechaActualiza: string,
  activo: boolean
}

export interface IFoto {
  id: number,
  idPaciente: number,
  ruta: string,
  extension: string,
  archivo: string,
  imagen: string,
  idUsuarioInserta: number,
  fechaInserta: string,
  idUsuarioActualiza: number,
  fechaActualiza: string,
  activo: boolean
}

export interface IHemodialisis {
  id: number,
  idAgenda: number,
  idPaciente: number,
  diagnostico: string,
  fechaIngreso: string,
  talla: string,
  peso: string,
  tipoDe: string,
  fechaAn: string,
  residual: string,
  alergias: string,
  fechaPanelViral: string,
  agsVHB: string,
  acVHC: string,
  acVIH: string,
  idDecisionSalida: number,
  idDecisionBaston: number,
  idDecisionAuditiva: number,
  idDecisionLinguistica: number,
  idDecisionAndadera: number,
  idDecisionCamilla: number,
  idDecisionVisual: number,
  idDecisionCreencias: number,
  idOrganizacion: number,
  filtro: string,
  tiempo: string,
  qs: string,
  qo: string,
  temp: string,
  na: string,
  c: string,
  qa: string,
  hcc: string,
  anticoagulacion: string,
  rodo: string,
  infusion: string,
  ktv: string,
  uf: string,
  resumenFiltro: string,
  frecuenciaHemodialisis: string,
  indicacionesMedicas: string,
  indicacionesVerbales: string,
  indicacionesTelefonicas: string,
  indicacionesElectronicas: string,
  idDecisionIndicacion: number,
  idDecisionPaciente: number,
  idDecisionProcedimiento: number,
  idDecisionVerificacion: number,
  idDecisionPreescripcion: number,
  idDecisionAngioacceso: number,
  idDecisionTimeOut: number,
  idDecisionEquipo: number,
  idDecisionRiesgo: number,
  idDecisionIdentifico: number,
  preTAPie: string,
  preFCPie: string,
  preTempC: string,
  preTASentado: string,
  preFCSentado: string,
  preSaturacion: string,
  preFRespiratoria: string,
  prePesoEgreso: string,
  prePesoActual: string,
  posTAPie: string,
  posFCPie: string,
  posTempC: string,
  posTASentado: string,
  posFCSentado: string,
  posSaturacion: string,
  posFRespiratoria: string,
  posGananciaPeso: string,
  posPesoFinal: string,
  idDecisionPreExterno: number,
  idDecisionPreInterno: number,
  idDecisionPreCateter: number,
  idDecisionPrePermeabilidad: number,
  idDecisionPreInfeccion: number,
  idDecisionTraExterno: number,
  idDecisionTraInterno: number,
  idDecisionTraCateter: number,
  idDecisionTraPermeabilidad: number,
  idDecisionTraInfeccion: number,
  idDecisionPosExterno: number,
  idDecisionPosInterno: number,
  idDecisionPosCateter: number,
  idDecisionPosPermeabilidad: number,
  idDecisionPosInfeccion: number,
  observacionCateter: string,
  idDecisionPreTrill: number,
  idDecisionPreEdena: number,
  idDecisionPreEquimosis: number,
  idDecisionPreHematoma: number,
  idDecisionPreAnerisma: number,
  idDecisionPreAdecuada: number,
  idDecisionPreDato: number,
  idDecisionTraTrill: number,
  idDecisionTraEdena: number,
  idDecisionTraEquimosis: number,
  idDecisionTraHematoma: number,
  idDecisionTraAnerisma: number,
  idDecisionTraAdecuada: number,
  idDecisionTraDato: number,
  idDecisionPosTrill: number,
  idDecisionPosEdena: number,
  idDecisionPosEquimosis: number,
  idDecisionPosHematoma: number,
  idDecisionPosAnerisma: number,
  idDecisionPosAdecuada: number,
  idDecisionPosDato: number,
  observacionFistula: string,
  idUsuarioInserta: number,
  fechaInserta: string,
  idUsuarioActualiza: number,
  fechaActualiza: string,
  activo: boolean
}

export interface ITransHemodialisis {
  id: number,
  idAgenda: number,
  idPaciente: number,
  hora: string,
  ta: string,
  fc: string,
  fr: string,
  sat: string,
  temp: string,
  qc: string,
  qo: string,
  part: string,
  pven: string,
  ptm: string,
  tasaUf: string,
  uf: string,
  ktv: string,
  idOrganizacion: number,
  idUsuarioInserta: number,
  fechaInserta: string,
  idUsuarioActualiza: number,
  fechaActualiza: string,
  activo: boolean
}

export interface ILlegada {
  id: number,
  idAgenda: number,
  idPaciente: number,
  fechaLlegada: string,
  horaLlegada: string,
  idOrganizacion: number,
  idUsuarioInserta: number,
  fechaInserta: string,
  idUsuarioActualiza: number,
  fechaActualiza: string,
  activo: boolean
}

export interface IPago {
  id: number,
  idAgenda: number,
  idPaciente: number,
  idFormaPago: number,
  importe: string,
  idOrganizacion: number,
  idUsuarioInserta: number,
  fechaInserta: string,
  idUsuarioActualiza: number,
  fechaActualiza: string,
  activo: boolean
}

export interface IPagoImagen {
  id: number,
  idPago: number,
  idAgenda: number,
  idPaciente: number,
  ruta: string,
  nombre: string,
  extension: string,
  archivo: string,
  imagen: string,
  idOrganizacion: number,
  idUsuarioInserta: number,
  fechaInserta: string,
  idUsuarioActualiza: number,
  fechaActualiza: string,
  activo: boolean
}

export interface IConsentimientoImagen {
  id: number,
  idPago: number,
  idAgenda: number,
  idPaciente: number,
  ruta: string,
  nombre: string,
  extension: string,
  archivo: string,
  imagen: string,
  idOrganizacion: number,
  idUsuarioInserta: number,
  fechaInserta: string,
  idUsuarioActualiza: number,
  fechaActualiza: string,
  activo: boolean
}

export interface IAvisoImagen {
  id: number,
  idPago: number,
  idAgenda: number,
  idPaciente: number,
  ruta: string,
  nombre: string,
  extension: string,
  archivo: string,
  imagen: string,
  idOrganizacion: number,
  idUsuarioInserta: number,
  fechaInserta: string,
  idUsuarioActualiza: number,
  fechaActualiza: string,
  activo: boolean
}

export interface IAgenda {
  id: number,
  idPaciente: number,
  idEquipo: number,
  comentario: string,
  fechaAgenda: string,
  fechaInicio: string,
  fechaFin: string,
  idOrganizacion: number,
  idUsuarioInserta: number,
  fechaInserta: string,
  idUsuarioActualiza: number,
  fechaActualiza: string,
  activo: boolean
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
  escritura: boolean,
  idUsuarioInserta: number,
  fechaInserta: string,
  idUsuarioActualiza: number,
  fechaActualiza: string,
  activo: boolean
}

export interface ISexo {
  id: number,
  sexo: string,
  idOrganizacion: number,
  idUsuarioInserta: number,
  fechaInserta: string,
  idUsuarioActualiza: number,
  fechaActualiza: string,
  activo: boolean
}

export interface IEstado {
  id: number,
  estado: string,
  idUsuarioInserta: number,
  fechaInserta: string,
  idUsuarioActualiza: number,
  fechaActualiza: string,
  activo: boolean
}

export interface IMunicipio {
  id: number,
  idEstado: number,
  municipio: string,
  idUsuarioInserta: number,
  fechaInserta: string,
  idUsuarioActualiza: number,
  fechaActualiza: string,
  activo: boolean
}

export interface IColonia {
  id: number,
  idEstado: number,
  idMunicipio: number,
  colonia: string,
  codigoPostal: string,
  idUsuarioInserta: number,
  fechaInserta: string,
  idUsuarioActualiza: number,
  fechaActualiza: string,
  activo: boolean
}

export interface IDecision {
  id: number,
  decision: string,
  idUsuarioInserta: number,
  fechaInserta: string,
  idUsuarioActualiza: number,
  fechaActualiza: string,
  activo: boolean
}

export interface IEquipo {
  id: number,
  equipo: string,
  idOrganizacion: number,
  idUsuarioInserta: number,
  fechaInserta: string,
  idUsuarioActualiza: number,
  fechaActualiza: string,
  activo: boolean
}

export interface ITipoConsulta {
  id: number,
  tipoConsulta: string,
  idOrganizacion: number,
  idUsuarioInserta: number,
  fechaInserta: string,
  idUsuarioActualiza: number,
  fechaActualiza: string,
  activo: boolean
}

export interface IFormaPago {
  id: number,
  formaPago: string,
  idOrganizacion: number,
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
  escritura: boolean,
  idOrganizacion: number,
  fecha: string,
  activo: boolean
}

export interface IEquipoView {
  equipo: string,
  total: number,
  idOrganizacion: number,
  activo: boolean
}

//#endregion "View"

//#region "Store"

export interface IFiltro {
  idOrganizacion: number,
  idRol: number,
  idMenu: number,
  fechaInicio: string,
  fechaFin: string,
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

export interface IPacienteVista {
  idPaciente: number,
  paciente: string,
  nombre: string,
  apellidoPaterno: string,
  apellidoMaterno: string,
  nombreCompleto: string,
  fechaNacimiento: string,
  edad: number,
  idSexo: number,
  idEstado: number,
  idMunicipio: number,
  idColonia: number,
  codigoPostal: string,
  calle: string,
  numeroInterior: string,
  numeroExterior: string,
  telefonoMovil: string,
  telefonoCasa: string,
  correo: string,
  fecha: string,
  hora: string,
  usuario: string,
  nombreUsuario: string,
  activo: boolean
}

export interface IAgendaVista {
  idAgenda: number,
  idPaciente: number,
  paciente: string,
  nombreCompleto: string,
  comentario: string,
  fechaInicio: string,
  horaInicio: string,
  fechaFin: string,
  horaFin: string,
  fecha: string,
  hora: string,
  usuario: string,
  nombreUsuario: string,
  activo: boolean
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
  escritura: boolean,
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
