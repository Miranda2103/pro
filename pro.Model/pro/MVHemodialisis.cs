using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;

namespace pro.Model
{
    [DisplayName("VHemodialisis")]
    [Table("VHemodialisis", Schema = "dbo")]
    public class MVHemodialisis
    {
        public long IdAgenda { get; set; }
        public string NombreCompleto { get; set; }
        public string FechaNacimiento { get; set; }
        public int Edad { get; set; }
        public string Sexo { get; set; }
        public string Diagnostico { get; set; }
        public string FechaIngreso { get; set; }
        public string Talla { get; set; }
        public string Peso { get; set; }
        public string TipoDe { get; set; }
        public string FechaAn { get; set; }
        public string Residual { get; set; }
        public string Alergias { get; set; }
        public string FechaPanelViral { get; set; }
        public string AgsVHB { get; set; }
        public string AcVHC { get; set; }
        public string AcVIH { get; set; }
        public long IdDecisionSalida { get; set; }
        public long IdDecisionBaston { get; set; }
        public long IdDecisionAuditiva { get; set; }
        public long IdDecisionLinguistica { get; set; }
        public long IdDecisionAndadera { get; set; }
        public long IdDecisionCamilla { get; set; }
        public long IdDecisionVisual { get; set; }
        public long IdDecisionCreencias { get; set; }
        public string Filtro { get; set; }
        public string Tiempo { get; set; }
        public string Qs { get; set; }
        public string Qo { get; set; }
        public string Temp { get; set; }
        public string Na { get; set; }
        public string C { get; set; }
        public string Qa { get; set; }
        public string Hcc { get; set; }
        public string Anticoagulacion { get; set; }
        public string Rodo { get; set; }
        public string Infusion { get; set; }
        public string Ktv { get; set; }
        public string Uf { get; set; }
        public string ResumenFiltro { get; set; }
        public string FrecuenciaHemodialisis { get; set; }
        public string IndicacionesMedicas { get; set; }
        public string IndicacionesVerbales { get; set; }
        public string IndicacionesTelefonicas { get; set; }
        public string IndicacionesElectronicas { get; set; }
        public long IdDecisionIndicacion { get; set; }
        public long IdDecisionPaciente { get; set; }
        public long IdDecisionProcedimiento { get; set; }
        public long IdDecisionVerificacion { get; set; }
        public long IdDecisionPreescripcion { get; set; }
        public long IdDecisionAngioacceso { get; set; }
        public long IdDecisionTimeOut { get; set; }
        public long IdDecisionEquipo { get; set; }
        public long IdDecisionRiesgo { get; set; }
        public long IdDecisionIdentifico { get; set; }
        public string PreTAPie { get; set; }
        public string PreFCPie { get; set; }
        public string PreTempC { get; set; }
        public string PreTASentado { get; set; }
        public string PreFCSentado { get; set; }
        public string PreSaturacion { get; set; }
        public string PreFRespiratoria { get; set; }
        public string PrePesoEgreso { get; set; }
        public string PrePesoActual { get; set; }
        public string PosTAPie { get; set; }
        public string PosFCPie { get; set; }
        public string PosTempC { get; set; }
        public string PosTASentado { get; set; }
        public string PosFCSentado { get; set; }
        public string PosSaturacion { get; set; }
        public string PosFRespiratoria { get; set; }
        public string PosGananciaPeso { get; set; }
        public string PosPesoFinal { get; set; }
        public long IdDecisionPreExterno { get; set; }
        public long IdDecisionPreInterno { get; set; }
        public long IdDecisionPreCateter { get; set; }
        public long IdDecisionPrePermeabilidad { get; set; }
        public long IdDecisionPreInfeccion { get; set; }
        public long IdDecisionTraExterno { get; set; }
        public long IdDecisionTraInterno { get; set; }
        public long IdDecisionTraCateter { get; set; }
        public long IdDecisionTraPermeabilidad { get; set; }
        public long IdDecisionTraInfeccion { get; set; }
        public long IdDecisionPosExterno { get; set; }
        public long IdDecisionPosInterno { get; set; }
        public long IdDecisionPosCateter { get; set; }
        public long IdDecisionPosPermeabilidad { get; set; }
        public long IdDecisionPosInfeccion { get; set; }
        public string ObservacionCateter { get; set; }
        public long IdDecisionPreTrill { get; set; }
        public long IdDecisionPreEdena { get; set; }
        public long IdDecisionPreEquimosis { get; set; }
        public long IdDecisionPreHematoma { get; set; }
        public long IdDecisionPreAnerisma { get; set; }
        public long IdDecisionPreAdecuada { get; set; }
        public long IdDecisionPreDato { get; set; }
        public long IdDecisionTraTrill { get; set; }
        public long IdDecisionTraEdena { get; set; }
        public long IdDecisionTraEquimosis { get; set; }
        public long IdDecisionTraHematoma { get; set; }
        public long IdDecisionTraAnerisma { get; set; }
        public long IdDecisionTraAdecuada { get; set; }
        public long IdDecisionTraDato { get; set; }
        public long IdDecisionPosTrill { get; set; }
        public long IdDecisionPosEdena { get; set; }
        public long IdDecisionPosEquimosis { get; set; }
        public long IdDecisionPosHematoma { get; set; }
        public long IdDecisionPosAnerisma { get; set; }
        public long IdDecisionPosAdecuada { get; set; }
        public long IdDecisionPosDato { get; set; }
        public string ObservacionFistula { get; set; }

        public MVHemodialisis()
        {
            NombreCompleto = string.Empty;
            FechaNacimiento = string.Empty;
            Sexo = string.Empty;
            Diagnostico = string.Empty;
            FechaIngreso = string.Empty;
            Talla = string.Empty;
            Peso = string.Empty;
            TipoDe = string.Empty;
            FechaAn = string.Empty;
            Residual = string.Empty;
            Alergias = string.Empty;
            FechaPanelViral = string.Empty;
            AgsVHB = string.Empty;
            AcVHC = string.Empty;
            AcVIH = string.Empty;
            Filtro = string.Empty;
            Tiempo = string.Empty;
            Qs = string.Empty;
            Qo = string.Empty;
            Temp = string.Empty;
            Na = string.Empty;
            C = string.Empty;
            Qa = string.Empty;
            Hcc = string.Empty;
            Anticoagulacion = string.Empty;
            Rodo = string.Empty;
            Infusion = string.Empty;
            Ktv = string.Empty;
            Uf = string.Empty;
            ResumenFiltro = string.Empty;
            FrecuenciaHemodialisis = string.Empty;
            IndicacionesMedicas = string.Empty;
            IndicacionesVerbales = string.Empty;
            IndicacionesTelefonicas = string.Empty;
            IndicacionesElectronicas = string.Empty;
            PreTAPie = string.Empty;
            PreFCPie = string.Empty;
            PreTempC = string.Empty;
            PreTASentado = string.Empty;
            PreFCSentado = string.Empty;
            PreSaturacion = string.Empty;
            PreFRespiratoria = string.Empty;
            PrePesoEgreso = string.Empty;
            PrePesoActual = string.Empty;
            PosTAPie = string.Empty;
            PosFCPie = string.Empty;
            PosTempC = string.Empty;
            PosTASentado = string.Empty;
            PosFCSentado = string.Empty;
            PosSaturacion = string.Empty;
            PosFRespiratoria = string.Empty;
            PosGananciaPeso = string.Empty;
            PosPesoFinal = string.Empty;
            ObservacionCateter = string.Empty;
            ObservacionFistula = string.Empty;
        }

    }
}
